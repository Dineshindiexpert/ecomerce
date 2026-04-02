import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import { apiService } from '../api';
import Loading from '../components/Loading'

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      firstname: '',
      nickname: '',
      gender: 'male',
      language: 'en-US',
      time: 'EST',
      contact: '0123456789',
      country: 'USA'
    }
  });

  // Fetch user data
  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await apiService.getloginuser(1);
        const data = res.data;

        console.log("API Data:", data);

        setProfile(data);

         
        reset({
          firstname: data.name?.firstname || '',
          nickname: data.username || '',
          gender: 'male',
          language: 'en-US',
          time: 'EST',
          contact: data.phone || '',
          country: data.address?.country || 'USA'
        });

      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchuser();
  }, [reset]);

  const handleOnSubmit = (data) => {
    console.log("Updated Form Data:", data);
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Loading/>
      </div>
    );
  }

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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT08_1dF0iNLYfRnL2lbqnlXg5QKKofxDew&s"
                alt="avatar"
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />
              <div>
                <p className='mb-0 fw-bold'>
                  {profile.name?.firstname || "Username"}
                </p>
                <p className='mb-0 text-muted'>
                  {profile.email || "useremail@gmail.com"}
                </p>
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

          {/* Contact */}
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                type="text"
                {...register("contact", {
                  required: "Contact number is required",
                  // minLength: {
                  //   value: 10,
                  //   message: "Must be 10 digits"
                  // },
                  // maxLength: {
                  //   value: 10,
                  //   message: "Must be 10 digits"
                  // },
                  // pattern: {
                  //   value: /^[0-9]+$/,
                  //   message: "Only digits allowed"
                  // }
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
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
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
                <option value="IST">India Standard Time</option>
                <option value="EST">Eastern Standard Time</option>
                <option value="PST">Pacific Standard Time</option>
              </Form.Select>
              <div className="text-danger">
                {errors?.time?.message}
              </div>
            </Form.Group>
          </Col>

        </Row>

        {/* Submit */}
        <div className="text-end">
          <Button type="submit" variant="primary">
            Update Details
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Profile;