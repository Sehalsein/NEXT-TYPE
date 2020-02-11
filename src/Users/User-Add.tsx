import React from 'react';
import { Col, Card, Typography } from 'antd';
// import SimpleReactValidator from 'simple-react-validator';
import FormGenerator from '@components/FormBuilder/FormGenerator';

const { Title } = Typography;

type State = {
    formValue: {
        firstName: '';
        lastName: '';
        email: '';
        designation: '';
        role: '';
        dob: '';
        validity: '';
    };
};

type Props = {
    fields: any;
    sections: any;
    primaryButton: any;
    secondaryButton: any;
};

class UserAdd extends React.Component<Props, State> {
    constructor(prop) {
        super(prop);
        this.state = {
            formValue: {
                firstName: '',
                lastName: '',
                email: '',
                designation: '',
                role: '',
                dob: '',
                validity: '',
            },
        };
    }

    handleInput = (name, value): void => {
        this.setState(prevState => ({
            formValue: {
                ...prevState.formValue,
                [name]: value,
            },
        }));
    };

    formSubmit = (): void => {
        const { formValue } = this.state;

        console.log('Submit');
        console.log(formValue);
    };

    formReset = (): void => {
        console.log('Clear');
        this.setState({
            formValue: {
                firstName: '',
                lastName: '',
                email: '',
                designation: '',
                role: '',
                dob: '',
                validity: '',
            },
        });
    };

    render(): JSX.Element {
        const { formValue } = this.state;
        const { fields, sections, primaryButton, secondaryButton } = this.props;
        return (
            <Col>
                <Title level={2}>User Creation</Title>
                <Card>
                    <FormGenerator
                        fields={fields}
                        sections={sections}
                        primaryButton={primaryButton}
                        secondaryButton={secondaryButton}
                        formData={formValue}
                        handleInput={this.handleInput}
                    />
                </Card>
            </Col>
        );
    }
}

export default UserAdd;
