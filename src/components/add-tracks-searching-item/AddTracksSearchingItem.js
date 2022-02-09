import React from "react";
import './ats-item.scss'
export default function AddTrackSearchingItem({track,setTrack,isMarked}) {
    const {trackName,trackCover,id,album,artistName}  = track
    return (
        <div role="row" aria-rowindex="2" aria-selected="false" className='item-added'>
            <div data-testid="tracklist-row" className="h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4" draggable="true"
                 role="presentation">
                <div className="gvLrgQXBFVW6m9MscfFA" role="gridcell" aria-colindex="1" tabIndex="-1">
                    <div className="byLkljnIRd_DJeSMD3LM"><img aria-hidden="false" draggable="false" loading="eager"
                                                               src={trackCover}
                                                               alt=""
                                                               className="mMx2LUixlnN_Fu45JpFB rkw8BWQi3miXqtlJhKg0"
                                                               width="40" height="40"/>
                        <button className="RfidWIoz8FON2WhFoItU Qs11Fsr_XqTVFDFWWRkQ"
                                aria-label="Включить трек «HOLLYWOOD» исполнителя WhyBaby?" tabIndex="-1">
                            <svg height="32" role="img" width="32" viewBox="0 0 24 24" className="UIBT7E6ZYMcSDl1KL62g">
                                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                            </svg>
                        </button></div>
                    <div className="iCQtmPqY0QvkumAOuCjr">
                        <div className="t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line w_Xs9cRXMwmQHw8BpiID"
                             dir="auto" as="div">{trackName}
                        </div>
                        <span className="sQcIERaiZKFhOM1LrSmX w_Xs9cRXMwmQHw8BpiID" as="span"
                              style={{color: "rgb(179, 179, 179);"}}>
                        <a draggable="true" dir="auto"
                                                              href="/artist/3Ai9vPDuBVLSlRdeLoOaYn"
                                                              tabIndex="-1">{artistName}</a></span></div>
                </div>

                <div className="HcMOFLaukKJdK5LfdHh0" role="gridcell" aria-colindex="3" tabIndex="-1">
                    <button  onClick={()=>setTrack(id)}
                             className={`Qt5xfSWikz6CLU8Vobxs X7lQWw2Ly_RZVPEFj2QY TIzP7JgU_iQ0NDYrqnQ ${isMarked ? 'marked' : ''}`}
                             type="button"
                            data-testid="add-to-playlist-button"
                             tabIndex="-1">

                        <span className="gvMYy0vqOxuYtbOkc6sH"
                              aria-label="Добавить в плейлист">
                            {isMarked ? 'Убрать': 'Добавить'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
