class FetchCore{
    _options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spotify23.p.rapidapi.com",
            "x-rapidapi-key": "bfdd5696eamsh4902840e2cebcd3p175847jsna7a7e5fe5ec7"
        }
    }
    _query = data=> Object.keys(data).map(key=>`${key}=${data[key]}`).join('&')

    _delayRequest = time=>new Promise((resolve => setTimeout(_=>resolve(),time)))

    async get(url, params={}) {
        if (!url) return Promise.resolve()
        Array.isArray(params.ids) && (params.ids = params.ids.join(','))

        const queries = this._query(params)
        // await this._delayRequest(2000)
        console.log('Perform request')
        const response = await fetch(url+'?'+queries, this._options)

        return await response.json()
    }
}
class SpotifyMapper {
    _artistsUrl = 'https://spotify23.p.rapidapi.com/artists/'
    _tracksUrl ='https://spotify23.p.rapidapi.com/tracks/'
    _albumsUrl = 'https://spotify23.p.rapidapi.com/albums/'
    _searchUrl = `https://spotify23.p.rapidapi.com/search/`
    _playlistTracksUrl = `https://spotify23.p.rapidapi.com/playlist_tracks/`
    _mapToTrackData(track){
        const albumData = track.album
        return {
            trackName:track.name,
            src:track.preview_url,
            id:track.id,
            artists:track.artists[0],
            explicit:track.explicit,
            trackCover:albumData.images[0].url,
            album:'single',
            albumId:'',
            addingDate:"11 дней назад",
            trackDuration:'4:20',
        }
    }
    _mapToArtistData(artist){
        return {
            img:artist.images[0].url,
            name:artist.name,
            genres:artist.genres,
            followers:artist.followers.total
        }
    }
    _mapToTrackPreviewData({name,albumOfTrack,artists}){
        return {
            trackCover:albumOfTrack.coverArt.sources[0].url,
            name:name,
            artistName:artists.items[0].profile.name
        }
    }
    _mapToArtistPreviewData(artist){
        const {profile:{name}, visuals:{avatarImage:{sources}}} =artist
        return {
            artistCover:sources[0].url,
            name
        }
    }
    _mapToPlaylistData(playlist){
        const {data:{uri,name,description,images:{items}}} = playlist
        const id = uri.split(':')[2]
        const image = items[0].sources[0].url
        return {
            name,
            description,
            image,
            id
        }
    }
    _mapToArtistData(artist){
       return {
           name:artist.name,
           monthListeners:artist.followers.total,
           isVerified:true,
           coverImg:artist.images[0].url,

       }
    }
    _mapToArtistPreviewAlbums(){
        return
    }


    _mapDataFromSearch(type,data){
        switch (type) {
            case 'artist': return {...this._mapToArtistPreviewData(data),type}
            case  'track': return {...this._mapToTrackPreviewData(data),type}
            default: return {}
        }

    }
}
export default class extends SpotifyMapper{


    fetchService = new FetchCore()

    async getArtist(ids){
        const json = await this.fetchService.get(this._artistsUrl, {ids})
        const artist = json.artists[0]
        return this._mapToArtistData(artist)
    }
    async getTrackByAlbumId(ids){
        const json = await this.fetchService.get(this._albumsUrl, {ids})
        const trackData = json.albums[0]
        const track = trackData.tracks.items[0]
        return this._mapToTrackData(track)
    }
    async getTracksByIds(ids){
        const json = await this.fetchService.get(this._tracksUrl, {ids})
        const data = json.tracks.map(this._mapToTrackData)
        return data
    }
    async search(q){
        const json = await this.fetchService.get(this._searchUrl,{
            q,
            type:'multi',
            limit:10,offset: '0',
            numberOfTopResults: '5'
        })

        if(!json) return Promise.resolve(null)
        const {topResults :{items}} = json
        const popularResult  = items[0].data
        const searchType = popularResult.uri.split(':')[1]
        return this._mapDataFromSearch(searchType,popularResult)
    }
    async demoPlaylists(){
        const json = await this.fetchService.get(this._searchUrl,{
            q:'Rock',
            type:'playlists',
            limit:8,
            offset: '0',
        })
        const data = json.playlists.items
        if (!json && !Array.isArray(data)) return Promise.resolve([])
        return data.map(this._mapToPlaylistData)
    }
    async demoPlaylistTracks(id){
        const json = await this.fetchService.get(this._playlistTracksUrl,{
            id,
            limit:16,
            offset: '0',

        })
        //Я об этом пожалею
        const data = json.items

            return {
                title:'Play',
                count:json.total,
                songs:data.map(item=>this._mapToTrackData(item.track))
            }


    }




}

