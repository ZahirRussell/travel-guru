const hotelData = [
    {
	    id: '0001',
        locationName: 'SAJEK',        
        description: 'If we call Sajek Valley the queen of the hill for its natural beauty then it will not be overstated. If a poll is arranged to vote beautiful places in Bangladesh then this undulating area will surely take the top position. Because of its green surroundings, pleasant weather and peaceful condition, it is known as the paradise of Bangladesh. It is the roof of Rangamati.',
        photo: 'https://media-cdn.tripadvisor.com/media/photo-s/09/bd/d1/fc/sajek.jpg',
        // map:  {
        //             "lat": "21.9497° N",
        //             "lon": "89.1833° E"
        //         },
        map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14648.751905376661!2d92.28618616929207!3d23.381416052112655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375262b11e9e190d%3A0xa35f430f8847b276!2sSajek!5e0!3m2!1sen!2sbd!4v1600430640301!5m2!1sen!2sbd',
		hotels: [
            {
			    id:'001',
				locationId: '0001',
                fullName: 'MONO ADAM RESORT',
                photo: 'https://cf.bstatic.com/images/hotel/max1024x768/223/223602461.jpg',
                rate: 300,
                score: '4.4' 
            },
            {
			    id:'002',
				locationId: '0001',
                fullName: 'RUNMOY RESORT',
                photo: 'https://media-cdn.tripadvisor.com/media/photo-s/09/31/9d/0f/sajek.jpg',
                rate: 350,
                score: '4.5' 
            },
            {
			    id:'003',
				locationId: '0001',
                fullName: 'RUNGRANG RESORT',
                photo: 'https://cf.bstatic.com/images/hotel/max1024x768/242/242590786.jpg',
                rate: 300,
                score: '4.2' 
            }
        ]
    },
    {
	    id: '0002',
        locationName: 'SREEMANGAL',        
        description: 'Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. Only one tea research institute in Bangladesh which name is BTRI (Bangladesh Tea Research Institute) is situated in Sreemangal.',
        photo: 'https://pbs.twimg.com/media/EXfzz7fU0AEE-vI.jpg',
        // map:  {
        //             "lat": "24.3065° N",
        //             "lon": "91.7296° E"
        //         },
        map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29087.557862291727!2d91.70753463876736!3d24.31356280557819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517a7a9ac91745%3A0x50f827893a88c955!2sSreemangal!5e0!3m2!1sen!2sbd!4v1600430899903!5m2!1sen!2sbd',
		hotels: [
            {
			    id:'004',
				locationId: '0002',
                fullName: 'HOTEL SKYPARK',
                photo: 'https://cf.bstatic.com/images/hotel/max1024x768/163/163636359.jpg',
                rate: 300,
                score: '4.2' 
            },
            {
			    id:'005',
				locationId: '0002',
                fullName: 'BALISHIRA RESORT',
                photo: 'https://cf.bstatic.com/images/hotel/max1024x768/221/221447028.jpg',
                rate: 300,
                score: '4.5' 
            },
            {
			    id:'006',
				locationId: '0002',
                fullName: 'SHANTIBARI RESORT',
                photo: 'https://cf.bstatic.com/images/hotel/max1024x768/196/196362685.jpg',
                rate: 30,
                score: '5.0' 
            }
        ]
    },
    {
	    id: '0003',
        locationName: 'SUNDARBAN',        
        description: 'Sundarban is one of most natural beauty of beautiful Bangladesh. This Forest is the largest mangrove forest in the world. The name ‘Sundar’ meaning is"beautiful" and ‘ban’ meaning , Sndarban also called ‘beautiful forest’. Sundorbone name comes from ‘Sundari Trees’ (Mangroves), a large numbers of ‘Sundari trees’ are found in Sundarbans. The Royal Bengal Tiger, deer, birds, crocodiles and snakes are main beauty of this Forest.',
        photo: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/60/a2/fd/caption.jpg',
        // map:  {
        //     "lat": "23.3820° N",
        //     "lon": "92.2938° E"
        // },
        map:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d944682.2915207127!2d89.21379115201661!3d22.347390229418302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe99cba5218a4be78!2sSundarban%20National%20Park!5e0!3m2!1sen!2sbd!4v1600431222233!5m2!1sen!2sbd',
        hotels: 
        [
            {
                id:'007',
                locationId: '0003',
                fullName: 'SUNDARBAN JUNGLE MAHAL',
                photo: 'https://cf.bstatic.com/images/hotel/max1024x768/243/243957657.jpg',
                rate: 350,
                score: '4.0' 
            },
            {
                id:'008',
                locationId: '0003',
                fullName: 'SOLITARY NOOK',
                photo: 'https://cf.bstatic.com/images/hotel/max1024x768/208/208384423.jpg',
                rate: 200,
                score: '5.0' 
            },
            {
                id:'009',
                locationId: '0003',
                fullName: 'OYO SAFARI RESORT',
                photo: 'https://cf.bstatic.com/images/hotel/max1024x768/230/230207543.jpg',
                rate: 20,
                score: '4.8' 
            }
        ]
    }
];

export default hotelData;

