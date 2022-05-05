const { User, Item } = require('../models/');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select(
                    '-__v -password'
                );

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

        users: async() => {
            return User.find().select('-__v -password');
        },

        user: async(parent, { username }) => {
            return User.findOne({ username }).select('-__v -password');
        },

        items: async(parent, { username }) => {
            const params = username ? { username } : {};
            return Item.find(params).sort({ createdAt: -1 });
        },
        
        itemsByUser: async(parent, { username }) => {
            const params = username ? { username } : {};
            return Item.find(params).sort({ createdAt: -1 });
        },

        item: async(parent, { _id }) => {
            return Item.findOne({ _id });
        },
    },

    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addItem: async(parent, args, context) => {
            if (context.user) {
                const item = await Item.create({
                    ...args,
                    username: context.user.username,
                });

                await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { items: item._id } }, { new: true });

                return item;
            }

            throw new AuthenticationError('You need to be logged in to post!');
        },

        addReaction: async(parent, { itemId, reactionBody }, context) => {
            if (context.user) {
                const updatedItem = await Item.findOneAndUpdate({ _id: itemId }, {
                    $push: {
                        reactions: { reactionBody, username: context.user.username },
                    },
                }, { new: true, runValidators: true });

                return updatedItem;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addFriend: async(parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { friends: friendId } }, { new: true }).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
    },
};

module.exports = resolvers;