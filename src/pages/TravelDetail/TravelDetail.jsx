import React, { Component } from 'react';
import { idArrival, idDeparture, idPlaceholder, idBack, idUser, idPhone, idMessages, idStar, idStarFull, idAddUser, idDownload, idDelete  } from '~/assets';
import { Progress, Modal, Tabs } from 'antd';
import './TravelDetail.css';

class TravelDetail extends Component{
  state = { 
    visible: false,
    image_bg: 'https://casadoturista.com.br/wp-content/uploads/2014/11/dwn_grande_71.jpg'
    
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render(){
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }
    return(
      <div className="travel-detail__container">
        <div className="travel-header">
          <h1 className="travel-title">Nome da Viagem</h1>
          <div className="gradient-bg gradient-bg-detail"></div>
          <img src={ this.state.image_bg } alt="" className="travel-header_bg"/>
        </div>
        <div className="travel-content">
        <Tabs defaultActiveKey="1" onChange={callback} size={'small'} animated={ false }>
          <TabPane tab="Info" key="1">
            <div className="info-togo">
              <h2>99hs para a partida...</h2>
            </div>
            <div className="container-travel-time">
              <div className="travel-content">
                <img src={ idDeparture } alt="departure" className="ico-travel-content"/>
                <div className="departure-text">
                  <div className="departure-data">Sábado, 23 de nov</div>
                  <div className="departure-time">Partida prevista para às 08:05 </div>
                </div>
              </div>
              <div className="travel-content">
                <img src={ idArrival } alt="" className="ico-travel-content"/>
                <div className="arrival-text">
                  <div className="arrival-data">Segunda, 25 de nov</div>
                  <div className="arrival-time">Chegada prevista para às 20:30 </div>
                </div>
              </div>
              <div className="travel-content">
                <img src={ idPlaceholder } alt="" className="ico-travel-content"/>
                <div className="arrival-text">
                  <div className="arrival-data">Beto Carreiro World</div>
                  <div className="arrival-time">Rod. Beto Carrero World - Praia de Armação do...</div>
                </div>
              </div>
            </div>
            <div className="vacancy_amount">
              <div className="vacancy_status">
                <span>39 confirmados</span>
                <span>6 vagas restantes</span>
              </div>
              <div className="vacancy_bar"> 
                <Progress percent={80} size="small" />
              </div>
              <p className="vacancy_hint">
                Aumente o alcance da sua viagem, torne sua viagem publica e publique o link nas redes sociais. Quanto mais confirmados, maior será seu destaque no Viajjar!!!
              </p>
              <div className="vacancy_link_modal">
                <span onClick={this.showModal}>Passageiros que confirmaram <img src={ idBack } alt="" className="ico_link_modal"/></span>
              </div>
              <Modal
                title="Passageiros que confirmaram"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <div className="vacancy_line"><span class="vacancy_numbers">45</span><span>lugares disponibilizados</span></div>
                <div className="vacancy_line"><span class="vacancy_numbers">39</span><span>confirmados</span></div>
                <div className="vacancy_line"><span class="vacancy_numbers">6</span><span>lugares disponiveis</span></div>
                <div className="vacancy_line"><span class="vacancy_numbers">4</span><span>na lista de espera</span></div>
              </Modal>
            </div>
            <div className="travel_passenger">
              <img src={ idUser } alt="" className="organizer_img"/>
              <div className="organizer_data">
                <span>Organizador</span>
                <span>Ricardo Justino</span>
                <div className="organizer_rating">
                  <img src={ idStarFull } alt="" className="organizer_star"/>
                  <img src={ idStarFull } alt="" className="organizer_star"/>
                  <img src={ idStarFull } alt="" className="organizer_star"/>
                  <img src={ idStar } alt="" className="organizer_star"/>
                  <img src={ idStar } alt="" className="organizer_star"/>
                </div>
              </div>
              <div className="organizer_contact">
                <a href="tel:+5511985485376" className="organizer_phone"><img src={ idPhone } alt="" className="ico_organizer_phone"/></a>
                <a href="" className="organizer_chat"><img src={ idMessages } alt="" className="ico_organizer_chat"/></a>
              </div>
            </div>
            <div className="travel_type">
              <span className="type_title">Tipo de viagem</span>
              <span className="type_text">Passeio de escola</span>
            </div>
            <div className="travel_value">
              <span className="value_text">Preço por passageiro</span>
                <span className="value_value">R$ 375,00</span>
              <span className="value_text">Este valor inclui as seguintes comodidades:</span>
              <ul>
                <li>Transporte rodoviário</li>
                <li>Ticket de entrada (passaporte para os dois dias)</li>
                <li>Hospedagem</li>
                <li>Três refeições diárias (café da manhã, almoço e jantar)</li>
              </ul>
            </div> 
            <div className="travel_footer">
              <button className="btn_invite">Convidar</button>
              <button className="btn_participate">Participar</button>
            </div> 
          </TabPane>
          <TabPane tab="Passageiros" key="2">
            <div className="info-togo">
              <h2>99hs para a partida...</h2>
            </div>
            <div className="passager_status">
              <p>
                <span>39/45 </span>
                <span>lugares preenchidos</span>
              </p>
              <p>
                <span>4</span>
                <span>pessoas na lista de espera</span>
              </p>              
            </div>
            <div className="passager_actions">
              <div className="btn-passager_action">
                <img src={ idAddUser } alt="" className=""/>
                <span>Adicionar passageiro manualmente</span>
              </div>
              <div className="btn-passager_action">
                <img src={ idDownload } alt="" className=""/>
                <span>Download / Exportar lista de passageiros</span>
              </div>
            </div>
            <ul className="passager_list">
              <li>
                <img src={ idUser } alt="" className="passenger_img"/>
                <div className="passenger_data">
                  <span>Passageiro</span>
                  <span>Rolando Caio da Rocha</span>
                </div>
                <div className="passenger_contact">
                  <a href="tel:+5511985485376" className="passenger_phone"><img src={ idPhone } alt="" className="ico_passenger_phone"/></a>
                  <a href="" className="passenger_chat"><img src={ idMessages } alt="" className="ico_passenger_chat"/></a>
                  <a href="" className="passenger_chat"><img src={ idDelete } alt="" className="ico_passenger_delete"/></a>
                </div>
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Contabilidade" key="3">
            <div className="info-togo">
              <h2>99hs para a partida...</h2>
            </div>
            <div className="info_amount">
              <p>
                <span>R$ 16.875,00</span>
                <span>total da viagem</span>
              </p>
              <p>
                <span>R$14.625,00</span>
                <span>arrecadado até agora</span>
              </p>            
            </div>
            <div className="info_detail-amout">
                <p>
                  <span>R$ 3.000,00</span>
                  <span>cia de onibus</span>
                </p>
                <p>
                  <span>R$ 4.500,00</span>
                  <span>ticket do parque</span>
                </p>
                <p>
                  <span>R$ 3.500,00</span>
                  <span>hospedagem</span>
                </p>
                <p>
                  <span>R$ 1.500,00</span>
                  <span>alimentação</span>
                </p>
            </div>
            <div className="info_total">
              <p>
                <span>Lucro de </span>
                <span>R$ 2.125,00</span>
              </p>
            </div>
          </TabPane>
        </Tabs>
  
        </div>
      </div>
    );
  }
}

export default TravelDetail;
