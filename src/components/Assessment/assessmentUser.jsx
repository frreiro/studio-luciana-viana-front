import React, { useState } from 'react';
//import styled from 'styled-components';
import { InputGroup, RadioGroup, Title } from '../utils/radioGroup.jsx';
import { Checkbox } from '../Booking/radioForm.jsx';
import { Text, UserHistoric } from '../Historic/historicUser.jsx';
import { HiddenDiv } from '../utils/radioCouple.jsx';



export default function AssessmentUser({ assessment, enableForm, setIsFlipped, isFlipped }) {
	const [page, setPage] = useState(1);

	function changePage() {
		if (page === 1) {
			setTimeout(() => setPage(page + 1), 100);
			setIsFlipped(!isFlipped);
		} else {
			setTimeout(() => enableForm(true), 100);
			setIsFlipped(!isFlipped);
		}
	}

	return (
		<>
			<UserHistoric >
				{page === 1 ?
					<>
						<RadioGroup>
							<Title>Tipo de pele :</Title>
							<InputGroup>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.skinType === 'Oleosa' ? 'checked' : ''}`}></span>
									<p>OLEOSA</p>
								</Checkbox>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.skinType === 'Seca' ? 'checked' : ''}`}></span>
									<p>SECA</p>
								</Checkbox>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.skinType === 'Normal' ? 'checked' : ''}`}></span>
									<p>NORMAL</p>
								</Checkbox>
							</InputGroup>
						</RadioGroup>
						<div>
							<Title>Alteração na pele:</Title>
							<Text >{assessment.spots ? assessment.spots : 'Nenhuma'}</Text>
						</div>
						<div>
							<Title>Manchas:</Title>
							<Text>{assessment.skinChanges ? assessment.skinChanges : 'Nenhuma'}</Text>
						</div>
						<div>
							<Title>Tratamento com ácido:</Title>
							<Text>{assessment.acidTreatment ? assessment.acidTreatment : 'Nenhuma'}</Text>
						</div>
						<div>
							<Title>Hidratação na pele: </Title>
							<Text>{assessment.skinHidratation ? assessment.skinHidratation : 'Nenhum'}</Text>
						</div>
					</>
					:
					<>
						<RadioGroup>
							<Title>É diabético:</Title>
							<InputGroup>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.hasDiabetes ? '' : 'checked'}`}></span>
									<p>NÃO</p>
								</Checkbox>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.hasDiabetes ? 'checked' : ''}`}></span>
									<p>SIM</p>
								</Checkbox>
								<HiddenDiv />
							</InputGroup>
						</RadioGroup>
						<RadioGroup>
							<Title>Já realizou algum tipo de depilação com cera: </Title>
							<InputGroup>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.alreadyWax ? '' : 'checked'}`}></span>
									<p>NÃO</p>
								</Checkbox>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.alreadyWax ? 'checked' : ''}`}></span>
									<p>SIM</p>
								</Checkbox>
								<HiddenDiv />
							</InputGroup>
						</RadioGroup>

						<RadioGroup>
							<Title>Método de epilação anterior:</Title>
							<InputGroup>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.lastStyle === 'CERA_QUENTE' ? 'checked' : ''}`}></span>
									<p>CERTA QUENTE</p>
								</Checkbox>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.lastStyle === 'CERA_FRIA' ? 'checked' : ''}`}></span>
									<p>CERA FRIA</p>
								</Checkbox>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.lastStyle === 'LAMINA' ? 'checked' : ''}`}></span>
									<p>LÂMINA</p>
								</Checkbox>
								<Checkbox>
									<span className={`checkbox-custom ${assessment.lastStyle === 'LASER' ? 'checked' : ''}`}></span>
									<p>LASER</p>
								</Checkbox>
							</InputGroup>
						</RadioGroup>
					</>

				}

				<button onClick={changePage}>{page === 1 ? 'PRÓXIMO' : 'EDITAR'}</button>
			</UserHistoric>
		</>
	);
}

//const UserAssessment = styled.div`
//height: 100%;
//display: flex;
//flex-direction: column;
//align-items: center;
//justify-content: center;


//button{
//        width:145px;
//        height:30px;
//        font-family: var(--body-font);
//        font-weight: lighter;
//        font-size: 16px;
//        color: white;
//        background-color: var(--button-color);
//        margin-top: 40px;
//        border-radius: 5px;
//    }


//    ${Checkbox}{
//        .checked{
//            background-color: var(--third-color);
//            border-radius: 30px;
//            border: solid 2px #FFFF;
//     }
//    }
//`;
