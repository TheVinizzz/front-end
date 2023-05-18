import Wave from '../../assets/wave.png';
import Moto from '../../assets/motoboy.png';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../../hook/useAuth';
import { ILogin } from '../../hook/useAuth/interfaces';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const schema = Yup.object().shape({
	email: Yup.string().email('Email inválido').required('Digite seu email'),
	password: Yup.string().required('Digite sua senha'),
});

function Login() {

	const { handleLogin, isAuthenticated } = useAuth()

	const navigate = useNavigate()

	const handleSubmitDate = async (values: ILogin) => {
		try {
			await toast.promise(handleLogin(values), {
				pending: 'Enviando dados',
				success: 'Login realizado com sucesso',
				error: 'Usuário não encontrado! Valide seus dados'
			})
			navigate('/dashboard')
		}
		catch {
			new Error('Login')
		}
	}
	
	useEffect(() => {
		if(isAuthenticated) {
			navigate('/dashboard')
		}
	},[isAuthenticated])

	return (
		<>
			<img
				src={Wave}
				className="fixed hidden lg:block inset-0 h-full"
			/>
			<div
				className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
			>
				<img
					src={Moto}
					className="hidden lg:block w-1/2  transition-all duration-500 transform mx-auto"
				/>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={handleSubmitDate}
					validationSchema={schema}
				>
					{({ handleSubmit, values }) => (
						
						<Form className="flex flex-col justify-center items-center w-1/2" onSubmit={handleSubmit}>
							<img src="https://app.tanayoupop.com.br/assets/img/logos/logo.png?v=1677859874mFhur" className="w-45" />
							{console.log('anu', values) as any}
							<h2
								className="my-8 font-display font-bold text-3xl text-gray-700 text-center"
							>
								Login
							</h2>
							<div className="relative ">
								<i className="fa fa-user absolute text-primarycolor text-xl"></i>
								<Field
									id="email"
									type="email"
									placeholder="Email"
									autoComplete="email"
									name='email'
									required
									className="pl-1 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 w-64"
								/>
							</div>
							<div className="relative mt-8">
								<i className="fa fa-lock absolute text-primarycolor text-xl"></i>
								<Field
									id="password"
									type="password"
									name='password'
									placeholder="Senha"
									className="pl-1 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 w-64"
								/>
							</div>
							<button
								type="submit"
								className="flex w-6/12 my-5 justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Entrar
							</button>
							<a href="#" className="self-end mt-4 text-gray-600 font-bold hover:text-purple-700"
							>Esqueceu a senha?</a>
							<a href="/register" className="self-end mt-4 text-gray-600 font-bold hover:text-purple-700"
							>Não tem conta? Registrar</a>
						</Form>
					)}
				</Formik>
			</div>
		</>
	)
}


export default Login;

