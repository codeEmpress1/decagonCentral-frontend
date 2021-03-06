import React from 'react'

export const Login = () => {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                <Link to={`/dashboard/${user.id}`}>Login</Link>
                </Button>
                
                {/* user.id to be gotten from token */}
            </Form>
        </div>
    )
}
