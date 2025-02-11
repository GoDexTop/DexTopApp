(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2668,5883],{35883:function(){},25062:function(e,t,n){"use strict";n.d(t,{SIWEController:function(){return o},getDidAddress:function(){return s.NmC},getDidChainId:function(){return s.ZzI}});var i=n(39933);n(257);var s=n(16637),a=n(73932),r=n(17832);let l=(0,r.sj)({status:"uninitialized"}),o={state:l,subscribeKey:(e,t)=>(0,a.VW)(l,e,t),subscribe:e=>(0,r.Ld)(l,()=>e(l)),_getClient(){if(!l._client)throw Error("SIWEController client not set");return l._client},async getNonce(e){let t=this._getClient(),n=await t.getNonce(e);return this.setNonce(n),n},async getSession(){try{let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t}catch{return}},createMessage(e){let t=this._getClient(),n=t.createMessage(e);return this.setMessage(n),n},async verifyMessage(e){let t=this._getClient(),n=await t.verifyMessage(e);return n},async signIn(){let e=this._getClient(),t=await e.signIn();return t},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){l._client=(0,r.iH)(e),l.status="ready",i.OptionsController.setIsSiweEnabled(e.options.enabled)},setNonce(e){l.nonce=e},setStatus(e){l.status=e},setMessage(e){l.message=e},setSession(e){l.session=e,l.status=e?"success":"ready"}};var c=n(11559),u=n(77996),g=u.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let d=class extends u.oi{constructor(){super(...arguments),this.dappImageUrl=i.OptionsController.state.metadata?.icons,this.walletImageUrl=i.MO.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return u.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};d.styles=g,d=function(e,t,n,i){var s,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,n,r):s(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r}([(0,c.customElement)("w3m-connecting-siwe")],d);var w=n(59662),h=n(84378),w3m_connecting_siwe_view_decorate=function(e,t,n,i){var s,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,n,r):s(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let p=class extends u.oi{constructor(){super(...arguments),this.dappName=i.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return this.onRender(),u.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){o.state.session&&i.IN.close()}async onSign(){this.isSigning=!0,i.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{o.setStatus("loading");let e=await o.signIn();return o.setStatus("success"),i.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(t){let e=i.AccountController.state.preferredAccountType;return e===h.y_.ACCOUNT_TYPES.SMART_ACCOUNT?i.SnackController.showError("This application might not support Smart Accounts"):i.SnackController.showError("Signature declined"),o.setStatus("error"),i.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){let{isConnected:e}=i.AccountController.state;e?(await i.ConnectionController.disconnect(),i.IN.close()):i.RouterController.push("Connect"),i.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};w3m_connecting_siwe_view_decorate([(0,w.SB)()],p.prototype,"isSigning",void 0),w3m_connecting_siwe_view_decorate([(0,c.customElement)("w3m-connecting-siwe-view")],p)}}]);