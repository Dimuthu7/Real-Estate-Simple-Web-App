import React, { useState } from 'react'
import axios from 'axios';
import Swal from "sweetalert2";

const Sell = () => {
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
    const [isLoading, setLoading] = useState(false)

    const handleImageChange = (e) => {
        if (e.target.files.length) {
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

    //Check whether user login the system
    const fnValidatePost = () => {
        let booValid = true
        if (localStorage.getItem("user-email") === null) {
            booValid = false
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Can not post ad without login. Please login the system',
            })
        }
        return booValid;
    }
    const fnOnPostClick = (e) => {
        e.preventDefault();
        debugger;
        if (fnValidatePost()) {
            setLoading(true)
            debugger;
            //Send post request to API and check whether user name and password correct or not.
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
                url: "http://localhost:8080/api/sell",
                data: formData

            }).then(res => {
                setLoading(false)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Your ad is under review stage!.`,
                    showConfirmButton: false,
                    timer: 2000
                });

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

    }

    return (
        <>
            <div className={isLoading ? "circle" : ""}>
                <div className={isLoading ? "wave-loading" : ""}></div>
            </div>
            <div className={isLoading ? "blur-form" : ""}>
                <div className="container">
                    <div className="row justify-content-center">
                        <h2><span className="">Sell a property</span></h2>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <form onSubmit={fnOnPostClick}>
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
                                            <img src={image.imgProperty.preview} style={{ maxWidth: "15vw" }}></img>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <label>No. of beds</label>
                                            <div className="text-danger ml-1">*</div>
                                        </div>
                                        <input name="numBeds" required={true} onChange={fnOnChange} type="number" className="form-control" id="customControlInline" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <label>No. of baths</label>
                                            <div className="text-danger ml-1">*</div>
                                        </div>
                                        <input name="numBaths" required={true} onChange={fnOnChange} type="number" className="form-control" id="customControlInline" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <label>Land size</label>
                                            <div className="text-danger ml-1">*</div>
                                        </div>
                                        <input name="numLandSize" required={true} onChange={fnOnChange} type="number" className="form-control" id="customControlInline" placeholder="perches" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <label>Title</label>
                                            <div className="text-danger ml-1">*</div>
                                        </div>
                                        <input name="strTitle" required={true} onChange={fnOnChange} type="text" className="form-control" id="customControlInline" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="input-group">
                                            <label>Description</label>
                                            <div className="text-danger ml-1">*</div>
                                        </div>
                                        <input name="strDescription" required={true} onChange={fnOnChange} type="text" className="form-control" id="customControlInline" />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <label>Price</label>
                                            <div className="text-danger ml-1">*</div>
                                        </div>
                                        <input name="numPrice" required={true} onChange={fnOnChange} type="number" className="form-control" id="customControlInline" placeholder="LKR" />
                                    </div>
                                </div>

                                <div className="row mt-4 mb-5">
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>POST AD</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Sell
