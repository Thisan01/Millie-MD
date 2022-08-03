const{fetchJson} = require('../lib')
module.exports = {
	name: "movie",
    alias :['imdb'],
	category: "Tools",
	desc: "Get Movie details",
	query :'Enter text ',
	async mbb({ msg,conn },{q}) {
        const response = await fetchJson(`http://www.omdbapi.com/?apikey=742b2d09&t=${q}&plot=full`);
        console.log(response)
        if(response.Response=== 'False') return msg.reply('Movie not found!')
        
        let str = '';
        str += '(kyloren) Title      : ' + response.Title + '\n\n';
        str += '(kyloren) Year       : ' + response.Year + '\n\n';
        str += '(kyloren) Rated      : ' + response.Rated + '\n\n';
        str += '(kyloren) Released   : ' + response.Released + '\n\n';
        str += '(kyloren) Runtime    : ' + response.Runtime + '\n\n';
        str += '(kyloren) Genre      : ' + response.Genre + '\n\n';
        str += '(kyloren) Director   : ' + response.Director + '\n\n';
        str += '(kyloren) Writer     : ' + response.Writer + '\n\n';
        str += '(kyloren) Actors     : ' + response.Actors + '\n\n';
        str += '(kyloren) Plot       : ' + response.Plot + '\n\n';
        str += '(kyloren) Language   : ' + response.Language + '\n\n';
        str += '(kyloren) Country    : ' + response.Country + '\n\n';
        str += '(kyloren) Awards     : ' + response.Awards + '\n\n';
        str += '(kyloren) BoxOffice  : ' + response.BoxOffice + '\n\n';
        str += '(kyloren) Production : ' + response.Production + '\n\n';
        str += '(kyloren) imdbRating : ' + response.imdbRating + '\n\n';
        str += '(kyloren) imdbVotes  : ' + response.imdbVotes;
        await conn.sendMessage(msg.from, {image :{url:response.Poster},caption: str});
	}
};
