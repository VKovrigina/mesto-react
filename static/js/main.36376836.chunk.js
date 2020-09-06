(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=(a(16),a(10)),i=a(3),l=a(1),u=a(7),p=a.n(u);var d=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:p.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 \u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f."}))};var m=function(e){var t=e.onCardClick,a=e.onCardLike,n=e.onCardDelete,o=e.link,c=e.name,s=e._id,i=e.likes,l=e.owner,u=e.userId,p=i.some((function(e){return e._id===u})),d=l._id===u;return r.a.createElement("article",{className:"card"},d&&r.a.createElement("button",{className:"card__button-delete",type:"button",onClick:function(){n(s)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),r.a.createElement("img",{className:"card__img",alt:c,src:o,onClick:function(){t(c,o)}}),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",{className:"card__title"},c),r.a.createElement("div",{className:"card__likes"},r.a.createElement("button",{className:"card__button-like ".concat(p&&"card__button-like_active"),type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",onClick:function(){a(s,i)}}),r.a.createElement("div",{className:"card__num-likes"},i.length))))},h=r.a.createContext();var _=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,o=e.onCardClick,c=e.initialCards,s=e.onCardLike,i=e.onCardDelete,l=r.a.useContext(h);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("button",{className:"profile__avatar-button",onClick:n},r.a.createElement("img",{className:"profile__avatar",alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",src:l&&l.avatar})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__name"},l&&l.name),r.a.createElement("button",{className:"profile__edit-button button",type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",onClick:t}),r.a.createElement("p",{className:"profile__job"},l&&l.about)),r.a.createElement("button",{className:"profile__add-button button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:a})),r.a.createElement("section",{className:"cards"},c.map((function(e){return r.a.createElement(m,Object.assign({key:e._id,onCardClick:o,onCardLike:s,onCardDelete:i},e,{userId:l._id}))}))))};var f=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa92020 Mesto Russia"))};var E=function(e){var t=e.card,a=e.onClose,n=e.isOpen,o=e.closeByEscAndOverlay;return r.a.useEffect((function(){o()})),r.a.createElement("div",{className:"popup popup_photo ".concat(n&&"popup_open")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close-button button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a}),r.a.createElement("img",{className:"popup__img",alt:t.name,src:t.link}),r.a.createElement("p",{className:"popup__photo-title"},t.name)))};var b=function(e){var t=e.name,a=e.title,n=e.buttonText,o=e.children,c=e.onClose,s=e.isOpen,i=e.onSubmit,l=e.closeByEscAndOverlay;return r.a.useEffect((function(){l()})),r.a.createElement("div",{className:"popup popup_".concat(t," popup_form ").concat(s&&"popup_open")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("button",{className:"popup__close-button button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c}),r.a.createElement("form",{className:"popup__form popup__form_".concat(t),name:t,method:"get",action:"#",onSubmit:i},r.a.createElement("h2",{className:"popup__title"},a),o,r.a.createElement("button",{className:"popup__form-button",type:"submit","aria-label":n},n))))};var v=function(e){var t=e.onClose,a=e.isOpen,n=e.onUpdateUser,o=e.closeByEscAndOverlay,c=r.a.useState(""),s=Object(l.a)(c,2),i=s[0],u=s[1],p=r.a.useState(""),d=Object(l.a)(p,2),m=d[0],_=d[1],f=r.a.useContext(h);return r.a.useEffect((function(){u(f.name),_(f.about)}),[f,t]),r.a.createElement(b,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:t,isOpen:a,onSubmit:function(e){e.preventDefault(),n({name:i,about:m})},closeByEscAndOverlay:o},r.a.createElement("input",{value:i,onChange:function(e){u(e.target.value)},type:"text",name:"name",className:"popup__input popup__input_type_name",id:"name-input",placeholder:"\u0424\u0418\u041e",minLength:"2",maxLength:"40",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"name-input-error"}),r.a.createElement("input",{value:m,onChange:function(e){_(e.target.value)},type:"text",name:"about",className:"popup__input popup__input_type_job",id:"job-input",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"job-input-error"}))};var y=function(e){var t=e.onClose,a=e.isOpen,n=e.onUpdateAvatar,o=e.closeByEscAndOverlay,c=r.a.useRef();return r.a.useEffect((function(){c.current.value=""}),[t]),r.a.createElement(b,{name:"edit-avatar",title:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:t,isOpen:a,onSubmit:function(e){e.preventDefault(),n({avatar:c.current.value})},closeByEscAndOverlay:o},r.a.createElement("input",{ref:c,type:"url",name:"avatar",className:"popup__input popup__input_type_avatar",id:"avatar-input",placeholder:"https://...",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"avatar-input-error"}))};var C=function(e){var t=e.onClose,a=e.isOpen,n=e.onAddPlace,o=e.closeByEscAndOverlay,c=r.a.useState(""),s=Object(l.a)(c,2),i=s[0],u=s[1],p=r.a.useState(""),d=Object(l.a)(p,2),m=d[0],h=d[1];return r.a.useEffect((function(){u(""),h("")}),[t]),r.a.createElement(b,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClose:t,isOpen:a,onSubmit:function(e){e.preventDefault(),n({name:i,link:m})},closeByEscAndOverlay:o},r.a.createElement("input",{value:i,onChange:function(e){u(e.target.value)},type:"text",name:"name",className:"popup__input popup__input_type_title",id:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"title-input-error"}),r.a.createElement("input",{value:m,onChange:function(e){h(e.target.value)},type:"url",name:"link",className:"popup__input popup__input_type_img",id:"img-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"img-input-error"}))},k=a(8),O=a(9),N=new(function(){function e(t){Object(k.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers,this._authorization=this._headers.authorization}return Object(O.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"_handleResponseError",value:function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization}}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorization}}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"createCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse).catch(this._handleResponseError)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"64f8b885-2658-44d6-bc45-dfe390bdb5b7","Content-Type":"application/json"}});var g=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),a=t[0],n=t[1],o=r.a.useState(null),c=Object(l.a)(o,2),u=c[0],p=c[1],m=r.a.useState(!1),b=Object(l.a)(m,2),k=b[0],O=b[1],g=r.a.useState(!1),j=Object(l.a)(g,2),A=j[0],L=j[1],S=r.a.useState(!1),R=Object(l.a)(S,2),U=R[0],x=R[1],P=r.a.useState(!1),B=Object(l.a)(P,2),T=B[0],D=B[1],z=r.a.useState({}),I=Object(l.a)(z,2),w=I[0],q=I[1];function J(){O(!1),L(!1),x(!1),D(!1)}function H(){function e(e){"Escape"===e.key&&J()}function t(e){e.target.classList.contains("popup_open")&&J()}return document.addEventListener("click",t),document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}return r.a.useEffect((function(){Promise.all([N.getUserInfo(),N.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],r=t[1];n(a),p(r)})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement(h.Provider,{value:a},r.a.createElement("div",{className:"page"},r.a.createElement(d,null),a&&u&&r.a.createElement(_,{onEditAvatar:function(){x(!0)},onEditProfile:function(){O(!0)},onAddPlace:function(){L(!0)},onCardClick:function(e,t){q({name:e,link:t}),D(!0)},initialCards:u,onCardLike:function(e,t){function n(t){var a=u.map((function(a){return a._id===e?t:a}));p(a)}t.some((function(e){return e._id===a._id}))?N.deleteLike(e).then((function(e){n(e)})).catch((function(e){return console.error(e)})):N.putLike(e).then((function(e){n(e)})).catch((function(e){return console.error(e)}))},onCardDelete:function(e){N.deleteCard(e).then((function(){var t=u.filter((function(t){return t._id!==e}));p(t)})).catch((function(e){return console.error(e)}))}}),a&&r.a.createElement(v,{isOpen:k,onClose:J,onUpdateUser:function(e){N.editProfile(e).then((function(e){n(Object(i.a)(Object(i.a)({},a),{},{name:e.name,about:e.about}))})).catch((function(e){return console.error(e)})),J()},closeByEscAndOverlay:H}),a&&r.a.createElement(y,{isOpen:U,onClose:J,onUpdateAvatar:function(e){N.editAvatar(e).then((function(e){n(Object(i.a)(Object(i.a)({},a),{},{avatar:e.avatar}))})).catch((function(e){return console.error(e)})),J()},closeByEscAndOverlay:H}),r.a.createElement(C,{isOpen:A,onClose:J,onAddPlace:function(e){N.createCard(e).then((function(e){p([e].concat(Object(s.a)(u)))})).catch((function(e){return console.error(e)})),J()},closeByEscAndOverlay:H}),r.a.createElement(f,null),r.a.createElement(E,{card:w,onClose:J,isOpen:T,closeByEscAndOverlay:H})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/logo.2b1f7ee5.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.36376836.chunk.js.map