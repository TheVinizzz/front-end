

function enterCode() {

}

export default function Registration() {
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <img src="https://app.tanayoupop.com.br/assets/img/logos/logo.png?v=1677859874mFhur" className="w-45" />
                    <h2
                        className="my-8 font-display font-bold text-3xl text-gray-700 text-center"
                    >
                        Cadastro YouPop
                    </h2>
                </div>
                <div className="w-auto px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Nome completo
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Telefone
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="tel"
                                    name="email"
                                    className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Senha
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a onClick={enterCode} target="_blank" href="/">
                                <a
                                    className="text-sm text-gray-600 underline hover:text-gray-900"
                                >
                                    Já é resgistrado?
                                </a>
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-purple-700 border border-transparent hover:bg-purple-800 rounded-md active:bg-purple-400 false"
                            >
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}