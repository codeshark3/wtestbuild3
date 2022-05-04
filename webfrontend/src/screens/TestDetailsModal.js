import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import "../assets/css/index.css";
const TestDetailsModal = ({ match }) => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    const fetchTest = async () => {
      const { data } = await axios.get(`/api/tests/${match.params.id}`);
      setTest(data);
    };

    fetchTest();
  }, []);
  return <Modal show={false}></Modal>;
};

export default TestDetailsModal;
