import { useEffect, useState } from 'react'
import React from "react"
import ReactDOM from "react-dom"
import { Button, Form, FormGroup, Label, Input,FormFeedback, Card, CardBody, CardHeader } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Succes() {

    return (
        <Card>
            <CardHeader>
                <h3>Form Başarıyla Gönderildi</h3>
            </CardHeader>
            <CardBody>
                <p>Form başarıyla gönderildi. Teşekkürler!</p>
            </CardBody>
        </Card>
    )
}