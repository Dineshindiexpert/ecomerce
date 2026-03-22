import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'

const Profile = () => {
    const {
        formState: { errors },
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            firstname: "",
            nickname: "",
            gender: "",
            country: "",
            language: "",
            time: ""
        }
    });

    const handleOnSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <Container>
            {/* Header */}
            <Row className="mb-4">
                <Col md={12}>
                    <Header />
                </Col>
            </Row>

            {/* Profile Info */}
            <Row className="mb-4">
                <Col md={12}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex gap-3 align-items-center'>
                            <img
                                src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                                alt="avatar"
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    borderRadius: "50%",
                                    objectFit: "cover"
                                }}
                            />
                            <div>
                                <p className='mb-0 fw-bold'>Username</p>
                                <p className='mb-0 text-muted'>useremail@gmail.com</p>
                            </div>
                        </div>

                        <Button size='lg' variant='warning'>
                            Edit
                        </Button>
                    </div>
                </Col>
            </Row>

            {/* Form */}
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
                <Row>
                    {/* First Name */}
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("firstname", {
                                    required: "First name is required"
                                })}
                            />
                            <div className="text-danger">
                                {errors?.firstname?.message}
                            </div>
                        </Form.Group>
                    </Col>


                    {/* Nickname */}
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nick Name</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("nickname", {
                                    required: "Nickname is required"
                                })}
                            />
                            <div className="text-danger">
                                {errors?.nickname?.message}
                            </div>
                        </Form.Group>
                    </Col>

                    {/* Gender */}
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                {...register("gender", {
                                    required: "Gender is required"
                                })}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="not_prefer">Prefer not to say</option>
                            </Form.Select>
                            <div className="text-danger">
                                {errors?.gender?.message}
                            </div>
                        </Form.Group>
                    </Col>
                    {/* mobile no : */}
                    <Col md={5}>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact no :</Form.Label>

                            <Form.Control
                                type="number"
                                {...register("contact", {
                                    required: "Contact number is required",

                                    minLength: {
                                        value: 10,
                                        message: "Contact number must be exactly 10 digits"
                                    },

                                    maxLength: {
                                        value: 10,
                                        message: "Contact number must be exactly 10 digits"
                                    },

                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Only digits are allowed"
                                    },

                                    validate: (value) =>
                                        !value.includes(" ") || "Contact number cannot contain spaces"
                                })}
                            />

                            <div className="text-danger">
                                {errors?.contact?.message}
                            </div>
                        </Form.Group>

                    </Col>
                    {/* Country */}
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Select
                                {...register("country", {
                                    required: "Country is required"
                                })}
                            >
                                <option value="">Select Country</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="china">China</option>
                            </Form.Select>
                            <div className="text-danger">
                                {errors?.country?.message}
                            </div>
                        </Form.Group>
                    </Col>

                    {/* Language */}
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Language</Form.Label>
                            <Form.Select
                                {...register("language", {
                                    required: "Language is required"
                                })}
                            >
                                <option value="">Select Language</option>
                                <option value="en-IN">English (India)</option>
                                <option value="en-US">English (USA)</option>
                                <option value="mr-IN">Marathi</option>
                            </Form.Select>
                            <div className="text-danger">
                                {errors?.language?.message}
                            </div>
                        </Form.Group>
                    </Col>

                    {/* Time Zone */}
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Time Zone</Form.Label>
                            <Form.Select
                                {...register("time", {
                                    required: "Time zone is required"
                                })}
                            >
                                <option value="">Select Time Zone</option>
                                <option value="IST">India Standard Time (IST)</option>
                                <option value="EST">Eastern Standard Time (EST)</option>
                                <option value="PST">Pacific Standard Time (PST)</option>
                            </Form.Select>
                            <div className="text-danger">
                                {errors?.time?.message}
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Submit Button */}
                <div className="text-end">
                    <Button type="submit" variant="primary">
                        Update Details
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default Profile