<script lang="ts">
  import { signOut } from "firebase/auth";
  import { fade } from "svelte/transition";
  export let isProfile = false;
  export let displayName = "";
  export let urlImageUser = "";
  export let emailUser = "";
  export let auth: any = "";
  const clicked = (event: any) => {
    event.stopPropagation();
    isProfile = true;
  };
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
</script>

{#if isProfile}
  <main
    class="profile-menu"
    on:click={(event) => clicked(event)}
    transition:fade={{ duration: 200 }}
  >
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={urlImageUser} />
    <h4>{displayName}</h4>
    <h5>{emailUser}</h5>
    <ul>
      <li class="button" on:click={() => signOutUser()}>Logout</li>
    </ul>
  </main>
{/if}

<style lang="scss">
  .profile-menu {
    width: 250px;
    height: max-content;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--brd-radius);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.5em;
    padding: 0.5em;
    cursor: auto;
    & img {
      width: 70px;
      height: 70px;
      border-radius: var(--brd-radius);
    }
    & h4 {
      text-align: center;
      width: 100%;
      font-size: var(--fs-h4);
      color: rgb(var(--text-secondary));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & h5 {
      text-align: center;
      width: 100%;
      font-size: var(--fs-h5);
      color: rgb(var(--text-secondary));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      height: 100%;
      & li {
        width: 100%;
        height: 50px;
        display: flex;
        font-size: var(--fs-p);
        align-items: center;
        justify-content: center;
        background-color: rgba(var(--primary-color), 0.5);
        border-radius: var(--brd-radius);
        display: flex;
        color: rgb(255, 255, 255);
        padding: 0.5em;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
        cursor: pointer;
        cursor: url(../lib/assets/cursors/pointer_25x25.png), default;
      }
    }
  }
</style>
