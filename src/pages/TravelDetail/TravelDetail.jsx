import React, { Component } from 'react';
import { idArrival, idDeparture, idPlaceholder, idBack, idUser, idPhone, idMessages, idStar, idStarFull, idAddUser, idDownload, idDelete  } from '~/assets';
import { Progress, Modal, Tabs } from 'antd';
import api from '~/services/api';
import './TravelDetail.css';

class TravelDetail extends Component{
  state = { 
    visible: false,
    image_bg: 'https://casadoturista.com.br/wp-content/uploads/2014/11/dwn_grande_71.jpg',
    travel: [],
    travelInfoLoaded: false,
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

  async componentDidMount() {
    let travelDetail = await api.post(`travelDetail/${this.props.match.params.id}`)
    console.log(travelDetail.data.excursion)
    this.setState({ travel: travelDetail.data.excursion, travelInfoLoaded: true });
  }

  render(){
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }
    const { travelInfoLoaded } = this.state;
    return travelInfoLoaded && (
      <div className="travel-detail__container">
        <div className="travel-header">
          <h1 className="travel-title">{ this.state.travel.title }</h1>
          <div className="gradient-bg gradient-bg-detail"></div>
          <img src="" alt="" className="travel-header_bg"/>
        </div>
        <div className="travel-content">
        <Tabs defaultActiveKey="1" onChange={ callback } size={'small'} animated={ false }>
          <TabPane tab="Info" key="1">
            <div className="info-togo">
            <h2> 
                Faltam 99 dias para viagem
            </h2>
            </div>
            <div className="container-travel-time">
              <div className="travel-content">
                <img src={ idDeparture } alt="departure" className="ico-travel-content"/>
                <div className="departure-text">
                  <div className="departure-data">{ this.state.travel.departure_date }</div>
                  <div className="departure-time">{ this.state.travel.departure_name }</div>
                </div>
              </div>
              <div className="travel-content">
                <img src={ idArrival } alt="" className="ico-travel-content"/>
                <div className="arrival-text">
                  <div className="arrival-data">{ this.state.travel.return_date }</div>
                  <div className="arrival-time">{ this.state.travel.destination_name }</div>
                </div>
              </div>
              <div className="travel-content">
                <img src={ idPlaceholder } alt="" className="ico-travel-content"/>
                <div className="arrival-text">
                  <div className="arrival-data">{ this.state.travel.destination_name }</div>
                  <div className="arrival-time">{ this.state.travel.destination_address }</div>
                </div>
              </div>
            </div>
            <div className="vacancy_amount">
              <div className="vacancy_status">
                <span>{ this.state.travel.paid.length } confirmados</span>
                <span>{ this.state.travel.vacancies - this.state.travel.paid.length } vagas restantes</span>
              </div>
              <div className="vacancy_bar"> 
                <Progress percent={ (this.state.travel.paid.length / this.state.travel.vacancies ) * 100} size="small" />
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
                <div className="vacancy_line"><span class="vacancy_numbers">{ this.state.travel.vacancies }</span><span>lugares disponibilizados</span></div>
                <div className="vacancy_line"><span class="vacancy_numbers">{ this.state.travel.vacancies - 10 }</span><span>confirmados</span></div>
                <div className="vacancy_line"><span class="vacancy_numbers">{ this.state.travel.vacancies - (this.state.travel.vacancies - 10) }</span><span>lugares disponiveis</span></div>
                <div className="vacancy_line"><span class="vacancy_numbers">4</span><span>na lista de espera</span></div>
              </Modal>
            </div>
            <div className="travel_passenger">
              <img src={ idUser } alt="" className="organizer_img"/>
              <div className="organizer_data">
                <span>Organizador</span>
                <span>{ this.state.travel.owner_id[0].name }</span>
              </div>
              <div className="organizer_contact">
                <a href="tel:+5511985485376" className="organizer_phone"><img src={ idPhone } alt="" className="ico_organizer_phone"/></a>
                <a href="" className="organizer_chat"><img src={ idMessages } alt="" className="ico_organizer_chat"/></a>
              </div>
            </div>
            <div className="travel_type">
              <span className="type_title">Tipo de viagem</span>
              <span className="type_text">{ this.state.travel.travel_type }</span>
            </div>
            <div className="travel_value">
              <span className="value_text">Preço por passageiro</span>
              <span className="value_value">R$ {this.state.travel.unitary_value},00</span>
            </div> 
            <div className="travel_footer">
              <button className="btn_participate">Participar</button>
            </div>
          </TabPane>
          <TabPane tab="Passageiros" key="2">
            <div className="info-togo">
              <h2>99hs para a partida...</h2>
            </div>
            <div className="passager_status">
              <p>
                <span>{ this.state.travel.paid.length }/{ this.state.travel.vacancies }</span>
                <span>lugares preenchidos</span>
              </p>
              {/* <p>
                <span>4</span>
                <span>pessoas na lista de espera</span>
              </p>               */}
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
