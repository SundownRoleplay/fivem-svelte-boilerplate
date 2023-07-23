<script lang="ts">
  import { onMount } from 'svelte';
  import { actions } from '../lib/stores';

  onMount(() => {
    actions.setRoute('/about');
  });
</script>

<h1>About Us</h1>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nisl lacus, ac dictum augue posuere at. Aenean vulputate lobortis rutrum. Sed egestas accumsan eleifend. Vivamus id dignissim justo. Donec nec sapien id nunc posuere dictum vitae gravida arcu. Nam sagittis dolor luctus, porta nunc ac, imperdiet purus. Maecenas lacinia turpis eget consequat placerat. Phasellus sodales auctor finibus. Ut consequat quis urna quis efficitur. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent ultricies tempor lectus, et vehicula enim porta a. Nullam lectus ligula, euismod vitae efficitur vel, iaculis non nunc. Duis nec accumsan sem.

Nunc fermentum justo non felis dignissim sagittis. Phasellus tristique vulputate sagittis. Ut vehicula nulla sed sodales accumsan. Aliquam maximus ornare vehicula. In tristique ligula non mollis pretium. Pellentesque leo ante, posuere vel velit quis, congue mollis magna. Vestibulum posuere scelerisque lectus. Duis vel dapibus quam. Maecenas et lectus vestibulum odio dignissim tristique.

Aenean felis massa, laoreet eu lectus vitae, accumsan pretium sem. Vestibulum gravida mauris id turpis mollis semper. Nunc sollicitudin viverra nibh. Cras facilisis, elit sollicitudin fringilla consequat, purus eros egestas odio, in malesuada lacus tellus quis urna. Etiam fermentum lectus nulla, eget feugiat ipsum ultrices ut. Aliquam sem velit, dignissim eu dictum ut, pellentesque sodales ligula. Nam pharetra scelerisque neque, nec posuere ex ultricies non. Donec fermentum finibus neque ut ultricies. Morbi eget ornare quam. Praesent et purus massa. Cras efficitur hendrerit neque, at tincidunt urna mattis sit amet. Mauris non ex id est suscipit fringilla.

Ut eget nunc neque. Vivamus varius facilisis augue eu mattis. Sed id dictum odio. Etiam finibus rutrum urna sit amet gravida. Nulla condimentum augue eu nulla tempus, blandit convallis eros convallis. Fusce id mattis nisl. Vivamus eu quam eget est finibus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh justo, congue vitae ligula id, convallis placerat arcu. Nulla dapibus luctus congue. Duis quis massa lacinia ipsum placerat tempor. Integer at nisl lobortis, aliquam turpis a, accumsan metus.

Aenean sem nulla, iaculis in ultricies nec, scelerisque eget enim. In hac habitasse platea dictumst. Vivamus sed dignissim sapien, ac aliquet lectus. Curabitur consectetur convallis convallis. Sed ac sapien iaculis, tristique sem eget, porta orci. Maecenas nec blandit nisi. Aliquam dapibus rhoncus egestas. Integer sollicitudin diam libero, ut posuere purus venenatis ut. Quisque ullamcorper mollis justo a rhoncus. Mauris id enim sit amet felis euismod dignissim non non dui. Fusce auctor justo at blandit ultricies. Donec sodales eros non justo aliquam semper.
<br>
<button on:click={() => actions.setRoute('/')}>BACK HOME</button>