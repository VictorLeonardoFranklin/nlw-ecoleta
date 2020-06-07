import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet'
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import CreateSucess from './CreateSucess';
import Dropzone from '../../components/dropzone';
import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logo.svg';

interface Item {
    id: number;
    title: string;
    image_url: string;
}
interface IBGEUFResponse {
    id: number;
    sigla: string;
    nome: string;
}

interface IBGECityResponse {
    id: number;
    nome: string;
}


const CreatePoint = () => {

    //Sempre que a gente criar um estado a gente precisa 
    //sempre informar o tipo da varial que vai ali dentro
    const userHistory = useHistory();
    const [hasSubmited, setHasSubmited] = useState<boolean>(false);
    const [items, setItems] = useState<Item[]>([]);

    const [estados, setEstados] = useState<IBGEUFResponse[]>([]);
    const [selectedUf, setSelectedUf] = useState('0');

    const [city, setCity] = useState<IBGECityResponse[]>([]);
    const [selectedCity, setSelectedCity] = useState('0');

    const [inicialPosition, setInicialPosition] = useState<[number, number]>([0, 0]);

    const [selectedFile, setSelectedFile] = useState<File>();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    });

    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

    const [selectedItems, setSelecteditems] = useState<number[]>([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInicialPosition([latitude, longitude]);
            setSelectedPosition([latitude, longitude]);
        });
    }, []);

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            setEstados(response.data);
        });
    }, []);

    useEffect(() => {
        if (selectedUf === '0')
            return;

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
            setCity(response.data);
        });
    }, [selectedUf]);

    function HandlerSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedUf(event.target.value);
    }

    function HandlerSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedCity(event.target.value);
    }

    function handlerMapclick(event: LeafletMouseEvent) {
        setSelectedPosition([event.latlng.lat, event.latlng.lng]);
    }

    function handlerInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handlerSelectItem(id: number) {
        const checkalreadySelected = selectedItems.findIndex(item => item === id);

        if (checkalreadySelected >= 0) {
            const filterItem = selectedItems.filter(item => item !== id);
            setSelecteditems(filterItem);
        } else {
            setSelecteditems([...selectedItems, id]);
        }
    }

    async function handlerOnSubmit(event: FormEvent) {
        event.preventDefault();

        const { name, email, whatsapp } = formData;
        const uf = selectedUf;
        const city = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const items = selectedItems;


        const data = new FormData();

        data.append('name', name);
        data.append('email', email);
        data.append('whatsapp', whatsapp);
        data.append('uf', uf);
        data.append('city', city);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('items', items.join(','));

        if (selectedFile) {
            data.append('image', selectedFile);
        }

        await api.post('/points', data);

        setHasSubmited(true);

        let delay = 2000;

        setTimeout(function () {
            userHistory.push('/');
        }, delay);
    }

    return (
        <div id="page-create-point">
            {hasSubmited && <CreateSucess />}
            <header>
                <img src={logo} alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para a home
                </Link>
            </header>
            <form onSubmit={handlerOnSubmit}>
                <h1>Cadastro do ponto de coleta</h1>
                <Dropzone onFileUploaded={setSelectedFile} />
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handlerInputChange}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handlerInputChange}
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="name">Whatsapp</label>
                            <input
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                onChange={handlerInputChange}
                                required
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={inicialPosition} zoom={15} onClick={handlerMapclick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={selectedPosition} />
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (uf)</label>
                            <select name="uf" id="uf" value={selectedUf} onChange={HandlerSelectedUf} required>
                                <option value="0">Selecione uma UF</option>
                                {estados.map(uf => (
                                    <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade (uf)</label>
                            <select name="city" id="city" value={selectedCity} onChange={HandlerSelectedCity} required>
                                <option value="0">Selecione uma cidade</option>
                                {city.map(city => (
                                    <option key={city.id} value={city.nome}>{city.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Ítens de Coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>
                    <ul className="items-grid">
                        {items.map(item => (
                            <li className={selectedItems.includes(item.id) ? 'selected' : ''}
                                key={item.id}
                                onClick={() => handlerSelectItem(item.id)}>
                                <img src={item.image_url} alt={item.title} />
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </fieldset>
                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>
        </div>
    )
};

export default CreatePoint;