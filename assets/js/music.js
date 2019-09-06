// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token = 'BQDw_GvAhXDqp5I2XwXTHdE1SWnJN9SwA6vGj9HCF59Jb4sEhtJQ1Nlk__wzOKmikyBRKKFf-oazwXICtf29hWcD33CaW2-LdxEu4ElwVMyur3NkJOtVPBA1MMewZT4AaxW8XFH-wUO0y0XojRsJ9k35CR8szOw4n629LyiY1tlTnWBoWsfN7eYfZA';
//   const player = new Spotify.Player({
//     name: 'Web Playback SDK Quick Start Player',
//     getOAuthToken: cb => { cb(token); }
//   });

//   // Error handling
//   player.addListener('initialization_error', ({ message }) => { console.error(message); });
//   player.addListener('authentication_error', ({ message }) => { console.error(message); });
//   player.addListener('account_error', ({ message }) => { console.error(message); });
//   player.addListener('playback_error', ({ message }) => { console.error(message); });

//   // Playback status updates
//   player.addListener('player_state_changed', state => { console.log(state); });

//   // Connect to the player!
//   player.connect();
// };
