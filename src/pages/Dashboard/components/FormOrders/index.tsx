import { Field, Form, Formik } from "formik"
import Input from "../../../../components/Input"

const FormOrders = () => {
    return (
        <div className="w-full">
            <Formik
                initialValues={{}}
                onSubmit={(data: any) => console.log("dataSend", data)}
            >
                {({ values }) => (
                    <Form>
                        {console.log(values) as any}
                        <div className="grid gap-4 grid-cols-4">
                            <div>
                                <Field
                                    component={Input}
                                    label="Endereço completo"
                                    name="adress"
                                />
                            </div>
                            <div>
                                <Field
                                    component={Input}
                                    label="Preço do pedido"
                                    name="data2"
                                />
                            </div>
                            <div>
                                <Field
                                    component={Input}
                                    label="Modo de pagamento"
                                    name="data"
                                />
                            </div>
                            <div>
                                <Field
                                    component={Input}
                                    label="Tipo da entrega"
                                    name="data2"
                                />
                            </div>
                            <div>
                                <Field
                                    component={Input}
                                    label="Total a pagar"
                                    name="data2"
                                />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormOrders