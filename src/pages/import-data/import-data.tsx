import { useState } from 'react';
import ImportDataCode from "./import-code";
import ImportDataTutorial from "./import-tutorial";
import ReactModal from 'react-modal';
;


function ImportData() {
	const [activeModal, setActiveModal] = useState(false);

	const handleCloseModal = () => {
		setActiveModal(false);
	};

	const toImportCode = () => {
		(document.getElementById("modalImportData") as HTMLDivElement).classList.remove("w-full");
		(document.getElementById("importTutorial") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importTutorial") as HTMLDivElement).classList.add("hidden");
		(document.getElementById("importCode") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importData") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importData") as HTMLDivElement).classList.add("hidden");
		(document.getElementById("avatar") as HTMLImageElement).classList.remove("hidden");
	};

	const toTutorial = () => {
		(document.getElementById("modalImportData") as HTMLDivElement).classList.remove("w-4/12");
		(document.getElementById("modalImportData") as HTMLDivElement).classList.remove("w-full");
		(document.getElementById("modalImportData") as HTMLDivElement).classList.add("w-full");
		(document.getElementById("importData") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importData") as HTMLDivElement).classList.add("hidden");
		(document.getElementById("importCode") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importCode") as HTMLDivElement).classList.add("hidden");
		(document.getElementById("importTutorial") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("avatar") as HTMLImageElement).classList.remove("hidden");
		(document.getElementById("avatar") as HTMLImageElement).classList.add("hidden");
	};



	return (
		<>
			<button onClick={() => setActiveModal(!activeModal)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				{activeModal ? 'Fechar Modal' : 'Abrir Modal / PopUp'}
			</button>

			<div id="modalImportData" className="w-4/12 mt-10 mx-auto pb-6 pt-2 flex flex-1 flex-col justify-center bg-white">

				<ReactModal
					isOpen={activeModal}
					onRequestClose={handleCloseModal}
					className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50" 
					overlayClassName="modal-overlay"
				>
				<div className="bg-white rounded shadow-lg w-1/3">
					<div className="border-b px-4 py-2 flex-row-reverse	">
						<button onClick={handleCloseModal} className="font-semibold bg-red-500">X</button>
						<h3>Integre a YouPop com sua conta Ifood !</h3>
					</div>
					<div className="p-3">
						<label>
							Precisamos que você autorize a YouPop para integrar com sua conta iFood.
							Precisa de ajuda? Clique no botão 'tutorial' abaixo, caso não precise
							Clique no botão importar e salve o código.
						</label>
					</div>
					<div className="flex justify-end items-center w-100 border-t p-3" >
						<a onClick={toTutorial}>
							<button
								type="submit"
								className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-white mr-1"
							>
								TUTORIAL
							</button>
						</a>

						<a onClick={toImportCode} target="_blank" href="https://portal.ifood.com.br/apps/code?c=KHNV-VMPT">
							<button
								type="submit"
								className="bg-purple-700 hover:bg-purple-800 px-3 py-1 rounded text-white mr-1"
								onClick={handleCloseModal}
							>
								IMPORTAR
							</button>
						</a>
					</div>
					<div id="importCode" className="sm:mx-auto sm:w-full sm:max-w-sm hidden">
						<ImportDataCode />
					</div>
					<div id="importTutorial" className="w-full hidden">
						<ImportDataTutorial />
					</div>
				</div>
				</ReactModal>
				<div id="importCode" className="sm:mx-auto sm:w-full sm:max-w-sm hidden">
					<ImportDataCode />
				</div>
				<div id="importTutorial" className="w-full hidden">
					<ImportDataTutorial />
				</div>
			</div>
		</>
	)
}



export default ImportData;

