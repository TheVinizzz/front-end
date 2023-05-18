







function ImportDataCode() {

	function ajustCode() {
		if (true) { }
		let codeFull = "";
		let index;
		for (index = 0; index < 6; index++) {
			codeFull += (document.getElementById("code0" + (index + 1)) as HTMLInputElement).value;
		}
		for (index = 0; index < codeFull.length; index++) {
			let currentCode = (document.getElementById("code0" + (index + 1)) as HTMLInputElement);
			currentCode.value = codeFull[index];
		}
		for (index = 0; index < 6; index++) {
			let currentCode = (document.getElementById("code0" + (index + 1)) as HTMLInputElement);
			if (index < codeFull.length) {
				currentCode.value = codeFull[index];
			}
			else {
				currentCode.value = "";
			}
		}
		(document.getElementById("code0" + (codeFull.length)) as HTMLInputElement).focus()
	}
	function save() {
	}
	function toImportData() {
		(document.getElementById("modalImportData") as HTMLDivElement).classList.remove("w-full");
		(document.getElementById("importTutorial") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importTutorial") as HTMLDivElement).classList.add("hidden");
		(document.getElementById("importData") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importCode") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importCode") as HTMLDivElement).classList.add("hidden");
		(document.getElementById("avatar") as HTMLImageElement).classList.remove("hidden");
	}

	return (
		<div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
			<div className="w-3/12 bg-white rounded shadow-lg p-6">
				<label className="w-auto flex justify-center font-semibold leading-6 ">
					CÓDIGO DE INTEGRAÇÃO DO IFOOD
				</label>
				<div className="flex justify-between pt-2" >
					<input id='code01' type="text" className="rounded-md border border-purple-800 h-12 w-12 text-center" onKeyUp={ajustCode} />
					<input id='code02' type="text" className="rounded-md border border-purple-800 h-12 w-12 text-center" onKeyUp={ajustCode} />
					<input id='code03' type="text" className="rounded-md border border-purple-800 h-12 w-12 text-center" onKeyUp={ajustCode} />
					<input id='code04' type="text" className="rounded-md border border-purple-800 h-12 w-12 text-center" onKeyUp={ajustCode} />
					<input id='code05' type="text" className="rounded-md border border-purple-800 h-12 w-12 text-center" onKeyUp={ajustCode} />
					<input id='code06' type="text" className="rounded-md border border-purple-800 h-12 w-12 text-center" onKeyUp={ajustCode} />
				</div>
				<div className="space-x-6 mt-4 flex leading-6 justify-center" >
					<a onClick={toImportData}>
						<button
							type="submit"
							className="flex  justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							VOLTAR
						</button>
					</a>
					<a onClick={save}>
						<button
							type="submit"
							className="flex justify-center rounded-md bg-purple-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							SALVAR
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}


export default ImportDataCode;

