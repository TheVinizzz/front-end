import { useState } from "react";


import img0001 from '/src/assets/tutorial/0001.png';
import img0002 from '/src/assets/tutorial/0002.png';
import img0003 from '/src/assets/tutorial/0003.png';
import img0004 from '/src/assets/tutorial/0004.png';
import img0005 from '/src/assets/tutorial/0005.png';
import img0006 from '/src/assets/tutorial/0006.png';
import img0007 from '/src/assets/tutorial/0007.png';
import img0008 from '/src/assets/tutorial/0008.png';
import img0009 from '/src/assets/tutorial/0009.png';
import img0010 from '/src/assets/tutorial/0010.png';
import img0011 from '/src/assets/tutorial/0011.png';
import img0012 from '/src/assets/tutorial/0012.png';

function ImportDataTutorial() {
	
	const [isLoading, setIsLoading] = useState(true);

	function toImportData(){
		(document.getElementById("modalImportData") as HTMLDivElement).classList.remove("w-full");
		(document.getElementById("modalImportData") as HTMLDivElement).classList.remove("w-4/12");
		(document.getElementById("modalImportData") as HTMLDivElement).classList.add("w-4/12");
		(document.getElementById("importTutorial") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importTutorial") as HTMLDivElement).classList.add("hidden");
		(document.getElementById("importData") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importCode") as HTMLDivElement).classList.remove("hidden");
		(document.getElementById("importCode") as HTMLDivElement).classList.add("hidden");
		(document.getElementById("avatar") as HTMLImageElement).classList.remove("hidden");
	}
	function next(){
	}
	function back(){
	}
	return (
		<>
			<div className="space-x-6 mt-4 flex leading-6 justify-center mb-5" >
				<a  onClick={toImportData}>
					<button
						type="submit"
						className="flex  justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						VOLTAR
					</button>
				</a>
			</div>
			
			<img src={img0001} className="mb-5"/>
			<img src={img0002} className="mb-5"/>
			<img src={img0003} className="mb-5"/>
			<img src={img0004} className="mb-5"/>
			<img src={img0005} className="mb-5"/>
			<img src={img0006} className="mb-5"/>
			<img src={img0007} className="mb-5"/>
			<img src={img0008} className="mb-5"/>
			<img src={img0009} className="mb-5"/>
s			<img src={img0011} className="mb-5"/>
			<img src={img0012} className="mb-5"/>
			<div className="space-x-6 mt-4 flex leading-6 justify-center" >
				<a  onClick={toImportData}>
					<button
						type="submit"
						className="flex  justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						VOLTAR
					</button>
				</a>
			</div>
		</>
	  )
	}
	

export default ImportDataTutorial;

