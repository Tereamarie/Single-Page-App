import React, { useEffect, useState } from "react";

export default function LocationsList() {

 


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://fish-species.p.rapidapi.com/fish_api/fishes',
  headers: {
    'X-RapidAPI-Key': '599d41c9eamsh9202c27da23de7fp1d3a39jsn97ada9b847e0',
    'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}