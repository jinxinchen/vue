import axios from 'axios';

import { domain } from './api_config.js';

axios.defaults.baseURL = domain;
axios.defaults.withCredentials = false;

export default axios;