import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from "sweetalert2";
import "./MyAd.css";

const MyAd = () => {
    const [booAd, setAd] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [imageDB, setImageDB] = useState("")
    const [image, setImage] = useState({
        imgProperty: {
            preview: "",
            raw: "",
        }
    })
    const [strAddress, setAddress] = useState("")
    const [numBeds, setBeds] = useState(0)
    const [numBaths, setBaths] = useState(0)
    const [numLandSize, setLandSize] = useState(0)
    const [strTitle, setTitle] = useState("")
    const [strDescription, setDescription] = useState("")
    const [numPrice, setPrice] = useState(0)
    const [isGetData, setGetData] = useState(false)

    useEffect(() => {
        setLoading(true)
        //Get advertisement by the current user 
        axios({
            method: 'post',
            url: "http://localhost:8080/api/sell/getProperty",
            data: {
                strBuyerEmail: localStorage.getItem("user-email"),
            }
        }).then(res => {

            setLoading(false)
            setAddress(res.data.strPropertyAddress)
            setImageDB(res.data.strImages)
            setBeds(res.data.numBeds)
            setBaths(res.data.numBaths)
            setLandSize(res.data.numLandSize)
            setTitle(res.data.strTitle)
            setDescription(res.data.strDescription)
            setPrice(res.data.numPrice)
            setAd(true)
            setGetData(true)

        }).catch(err => {  //Handle error
            setGetData(true)
            setLoading(false)
            if (err.response.status === 404) {
                Swal.fire({
                    icon: "error",
                    title: err.response.data,
                    text: "Get started by posting your first ad."
                });
            }
            else if (err.response.status === 400) {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: err.response.data
                });
            }
        })
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files.length) {
            setImageDB("")
            const imgPropertyObj = {
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            };
            setImage({ imgProperty: imgPropertyObj });
        }
    }

    const fnOnChange = (e) => {
        if (e.target.name === "strAddress") setAddress(e.target.value)
        else if (e.target.name === "numBeds") setBeds(e.target.value)
        else if (e.target.name === "numBaths") setBaths(e.target.value)
        else if (e.target.name === "numLandSize") setLandSize(e.target.value)
        else if (e.target.name === "strTitle") setTitle(e.target.value)
        else if (e.target.name === "strDescription") setDescription(e.target.value)
        else if (e.target.name === "numPrice") setPrice(e.target.value)
    }

    //Update Ad
    const fnOnEditClick = () => {
        setLoading(true)
        const formData = new FormData();
        formData.append("strImages", image.imgProperty.raw);
        formData.set("strPropertyAddress", strAddress);
        formData.set("numBeds", numBeds);
        formData.set("numBaths", numBaths);
        formData.set("numLandSize", numLandSize);
        formData.set("strTitle", strTitle);
        formData.set("strDescription", strDescription);
        formData.set("numPrice", numPrice);
        formData.set("strBuyerEmail", localStorage.getItem("user-email"));
        axios({
            method: 'post',
            url: "http://localhost:8080/api/sell/update",
            data: formData
        }).then(res => {
            setLoading(false)
            Swal.fire(
                'Successfully!',
                'Your ad is updated!',
                'success'
            )

        }).catch(err => {  //Handle error
            setLoading(false)
            if (err.response.status === 404) {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: err.response.data
                });
            }
        })
    }

    //Delete Ad
    const fnOnDeleteClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true)
                axios({
                    method: 'post',
                    url: "http://localhost:8080/api/sell/delete",
                    data: {
                        strBuyerEmail: localStorage.getItem("user-email"),
                    }
                }).then(res => {
                    setLoading(false)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )

                }).catch(err => {  //Handle error
                    setLoading(false)
                    if (err.response.status === 404) {
                        Swal.fire({
                            icon: "error",
                            title: "Something went wrong!",
                            text: err.response.data
                        });
                    }
                })
            }
        })


    }

    return (
        <>
            {(isGetData) ? (booAd) ?
                <div style={{ height: "100vh" }}>
                    <div className={isLoading ? "circle" : ""}>
                        <div className={isLoading ? "wave-loading" : ""}></div>
                    </div>
                    <div className={isLoading ? "blur-form" : ""}>
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <label>Property address</label>
                                                    <div className="text-danger ml-1">*</div>
                                                </div>
                                                <textarea name="strAddress" onChange={fnOnChange} value={strAddress} className="form-control" id="strTextArea" rows="2" required={true}></textarea>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <label>Image</label>
                                                    <div className="text-danger ml-1">*</div>
                                                </div>
                                                <div className="input-group">
                                                    <input className="fileInput"
                                                        required={true}
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleImageChange(e)} />
                                                    <img src={imageDB !== "" ? `http://localhost:8080/images/${imageDB}`
                                                        : image.imgProperty.preview
                                                    } style={{ maxWidth: "15vw" }}></img>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-md-4">
                                                <div className="input-group">
                                                    <label>No. of beds</label>
                                                    <div className="text-danger ml-1">*</div>
                                                </div>
                                                <input name="numBeds" value={numBeds} required={true} onChange={fnOnChange} type="number" className="form-control" id="customControlInline" />
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-group">
                                                    <label>No. of baths</label>
                                                    <div className="text-danger ml-1">*</div>
                                                </div>
                                                <input name="numBaths" value={numBaths} required={true} onChange={fnOnChange} type="number" className="form-control" id="customControlInline" />
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-group">
                                                    <label>Land size</label>
                                                    <div className="text-danger ml-1">*</div>
                                                </div>
                                                <input name="numLandSize" value={numLandSize} required={true} onChange={fnOnChange} type="number" className="form-control" id="customControlInline" placeholder="perches" />
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-md-4">
                                                <div className="input-group">
                                                    <label>Title</label>
                                                    <div className="text-danger ml-1">*</div>
                                                </div>
                                                <input name="strTitle" value={strTitle} required={true} onChange={fnOnChange} type="text" className="form-control" id="customControlInline" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="input-group">
                                                    <label>Description</label>
                                                    <div className="text-danger ml-1">*</div>
                                                </div>
                                                <input name="strDescription" value={strDescription} required={true} onChange={fnOnChange} type="text" className="form-control" id="customControlInline" />
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-md-4">
                                                <div className="input-group">
                                                    <label>Price</label>
                                                    <div className="text-danger ml-1">*</div>
                                                </div>
                                                <input name="numPrice" value={numPrice} required={true} onChange={fnOnChange} type="number" className="form-control" id="customControlInline" placeholder="LKR" />
                                            </div>
                                        </div>

                                        <div className="row mt-4 mb-5">
                                            <div className="col-md-6">
                                                <button type="button" onClick={fnOnEditClick} className="btn btn-warning" style={{ width: "100%" }}>UPDATE AD</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="button" onClick={fnOnDeleteClick} className="btn btn-danger" style={{ width: "100%" }}>DELETE AD</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                :
                <div className="container App-header" style={{ height: "50vh" }}>
                    <i class="fas fa-box-open" style={{ fontSize: "50px" }}></i>
                    <div className="row">
                        <span className="text-center">You haven't posted any ads yet!</span> <br />
                    </div>
                    <div className="row">
                        <span className="text-2">Get started by posting your first ad. It only takes about 1 hour during office hours for us to review your ad and it to be published</span>

                    </div>
                </div>
                : <span style={{ height: "50vh" }}>Loading... </span>
            }

        </>
    )
}

export default MyAd
