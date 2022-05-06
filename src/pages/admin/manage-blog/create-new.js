import React, {useState} from "react"
import AppLayout from "@/components/Layouts/AppLayout"
import GridContainer from "@/components/Grid/GridContainer"
import GridItem from "@/components/Grid/GridItem"
import Card from "@/components/Card/Card"
import CardHeader from "@/components/Card/CardHeader"
import CardBody from "@/components/Card/CardBody"
import {makeStyles} from "@material-ui/core/styles"
import styles from "@/assets/jss/nextjs-material-dashboard/views/dashboardStyle"
import {Button} from "@mui/material"
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'

const CreateNewBlog = () => {

    const useStyles = makeStyles(styles)
    const classes = useStyles()
    const [email, setEmail] = useState('')

    const handleChange = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = () => {
        alert(email)
    }
    return (
        <AppLayout>
            <div className="dashboardContainer">
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="dark">
                                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                                <p className={classes.cardCategoryWhite}>
                                    New employees on 15th September, 2016
                                </p>
                            </CardHeader>
                            <CardBody>
                                <ValidatorForm
                                    onSubmit={handleSubmit}
                                    onError={errors => console.log(errors)}
                                >
                                    <TextValidator
                                        label="Email"
                                        onChange={handleChange}
                                        name="email"
                                        value={email}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['this field is required', 'email is not valid']}
                                    />
                                    <Button
                                        color="success"
                                        variant="contained"
                                    >Submit
                                    </Button>
                                </ValidatorForm>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </AppLayout>
    )
}

export default CreateNewBlog