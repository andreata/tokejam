<template>
  <div class="layout">

    <vue-cookie-accept-decline
        :ref="'myPanel1'"
        :elementId="'myPanel1'"
        :debug="false"
        :position="'bottom-left'"
        :type="'floating'"
        :disableDecline="false"
        :transitionName="'slideFromBottom'"
        :showPostponeButton="false"
        @status="cookieStatus"
        @clicked-accept="cookieClickedAccept"
        @clicked-decline="cookieClickedDecline">

        <div slot="postponeContent">
            &times;
        </div>

        <div slot="message">
            Utilizziamo solo cookie tecnici per rendere accessibile la tua navigazione. 
        </div>
 
        <div slot="declineContent">
          Nega
        </div>
 
        <div slot="acceptContent">
            Ok, acconsento!
        </div>
    </vue-cookie-accept-decline>

    <header class="header">   
        
        <div class="logo">
          <g-image src="~/assets/images/icon/tokeJam_logo.png" alt=""  width="200"/>
          <g-link class="logo-link"  to="/">link</g-link>
        </div>
        
        <ToggleTheme />     
        <NavBar /> 

       <SearchWordPress />
      
    </header>

    <div class="content">
        <slot/>
    </div>

    <div class="sidebar" v-if="sidebar">
      <site-sidebar/> 
    </div>

    <div class="footer">
      <site-footer/>
    </div>

  </div>
</template>

<script>
  import SiteFooter from '~/components/SiteFooter.vue'
  import ToggleTheme from '~/components/ToggleTheme.vue'
  import SiteSidebar from '~/components/SiteSidebar.vue'
  import SearchWordPress from '~/components/SearchWordPress.vue'
  import NavBar from '~/components/NavBar.vue'

  export default {
    components: {
      SiteFooter,
      ToggleTheme,
      SiteSidebar,
      NavBar,
      SearchWordPress
    },
    props: ['sidebar'],
    methods: {
    cookieStatus(status) {
      this.status = status;
    },
    cookieClickedAccept() {
      this.status = 'accept';
      
    },
    cookieClickedDecline() {
      this.status = 'decline';
    }
  },
  computed: {
    statusText() {
      return this.status || 'No cookie set';
    }
  }
  }
</script>

<style lang="scss">

.logo {
  position: relative;

  .logo-link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 11;
  }
}

.header__right {
    display: flex;
    align-items: center;
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

header {
    border-bottom: 1px solid var(--border-color);
    flex-wrap: nowrap;
    position: -webkit-sticky;
    position: sticky;
    transition: background-color .3s,border-color,.3s;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;
  > span {
    margin: 0 .35em;
  }
  a {
    color: currentColor;
  }
}
</style>



