import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { ADD_ITEM } from '../../utils/mutations';
import { QUERY_ITEMS, QUERY_ME_BASIC } from '../../utils/queries';
import './AddItem.css'
import axios from 'axios';

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, accessibility, responsive, placeholder } from '@cloudinary/react';


export default function AddItem() {

    const { data: userData } = useQuery(QUERY_ME_BASIC)
    const [username] = useState(userData)
    const [formState, setFormState] = useState({ itemPublisher: "", itemTitle: '', itemIssueTitle: '', itemIssueNumber: '', itemDescription: '', itemCondition: '', itemPrice: '', itemImage: 'https://res.cloudinary.com/codezilla2022/image/upload/v1651705771/default_ulb9oh.jpg', username: username, });
    const [addItem, { error }] = useMutation(ADD_ITEM)
    const { data, loading, errors } = useQuery(QUERY_ITEMS);

    const [btn, setBtn] = useState(true)

    console.log(data, username)

    const noImage = () => {

        setBtn(false)

    }





    const uploadImage = (event) => {
        const cloud_name = 'dgammnnz0';
        const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloud_name}/upload`;
        const CLOUDINARY_UPLOAD_PRESET = 'h5xqdx19';

        const file = event.target.files[0];
        var formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        console.log('start');
        axios(CLOUDINARY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(response => {
            console.log(response.data.secure_url)
            setBtn(false)
            const { name } = event.target;
            setFormState({
                ...formState,
                [name]: response.data.secure_url
            })
        })



    }


    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    // submit form (notice the async!)
    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log("handel")
        console.log(formState)
        const tryd = addItem
            // use try/catch instead of promises to handle errors
        try {
            // execute addUser mutation and pass in variable data from form
            const { data } = await addItem({
                variables: {...formState }
            });
            console.log(data)


        } catch (e) {
            console.error(e);
            handleFormSubmit();
        }
        // window.location.reload();
    };
    return ( <
        div className = "addItem" >
        <
        div className = "addItem__container" >
        <
        form onSubmit = {
            (e) => { e.preventDefault(); } } >
        <
        input placeholder = "itemPublisher"
        name = "itemPublisher"
        type = "itemPublisher"
        id = "itemPublisher"
        value = { formState.itemPublisher }
        onChange = { handleChange }
        className = "addItem__input" /
        >
        <
        input placeholder = "itemTitle"
        name = "itemTitle"
        type = "itemTitle"
        id = "itemTitle"
        value = { formState.itemTitle }
        onChange = { handleChange }
        className = "addItem__input" /
        >
        <
        input placeholder = "itemIssueTitle"
        name = "itemIssueTitle"
        type = "itemIssueTitle"
        id = "itemIssueTitle"
        value = { formState.itemIssueTitle }
        onChange = { handleChange }
        className = "addItem__input" /
        >
        <
        input placeholder = "itemIssueNumber"
        name = "itemIssueNumber"
        type = "itemIssueNumber"
        id = "itemIssueNumber"
        value = { formState.itemIssueNumber }
        onChange = { handleChange }
        className = "addItem__input" /
        >
        <
        input placeholder = "itemDescription"
        name = "itemDescription"
        type = "itemDescription"
        id = "itemDescription"
        value = { formState.itemDescription }
        onChange = { handleChange }
        className = "addItem__input" /
        >
        <
        input placeholder = "itemCondition"
        name = "itemCondition"
        type = "itemCondition"
        id = "itemCondition"
        value = { formState.itemCondition }
        onChange = { handleChange }
        className = "addItem__input" /
        >
        <
        input placeholder = "itemPrice"
        name = "itemPrice"
        type = "itemPrice"
        id = "itemPrice"
        value = { formState.itemPrice }
        onChange = { handleChange }
        className = "addItem__input" /
        >
        <
        input name = "itemImage"
        type = "file"
        value = { formState.image }
        onChange = { uploadImage }
        className = "addItem__input" /
        >
        <
        button onClick = { noImage } > No image < /button>


        <
        button disabled = { btn }
        onClick = { handleFormSubmit } > Submit < /button>

        <
        /form> { /* {data.map(item=>(<div>{item}</div>))} */ } <
        /div>

        <
        /div>
    )
}