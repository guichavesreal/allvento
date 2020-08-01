import axios from 'axios';

const urlStates = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export default {
    data(){
        return{
            info:[]
        }
    },
    getAllStates: () => {
        axios.get(urlStates)
        .then(response => (this.info = response))
    }
}