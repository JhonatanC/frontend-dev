.header {
  background: #000;
  color: #fff; }
  .header .nav-button {
    display: none; }
  .header .menu {
    display: flex; }
    .header .menu li > ul {
      display: none; }
    .header .menu li:hover > ul.sub-menu {
      display: block; }
    .header .menu li ul {
      background: #000;
      position: absolute;
      width: 14%;
      z-index: 9999; }
      .header .menu li ul li {
        position: relative; }
        .header .menu li ul li ul {
          top: 0;
          left: 100%;
          width: 100%; }
    .header .menu li a {
      color: #fff;
      display: block;
      padding: 1em .5em;
      text-decoration: none; }
      .header .menu li a:hover {
        background: #232323; }
      .header .menu li a.active {
        background: #232323; }

@media screen and (min-width: 769px) {
  .header .nav-button {
    display: none; }
  .header .menu {
    display: flex !important; } }
@media screen and (max-width: 768px) {
  .header .nav-button {
    background: #fff;
    border-radius: 5px;
    display: block;
    height: 30px;
    position: absolute;
    right: 1em;
    top: .5em;
    width: 30px; }
  .header .menu {
    display: none;
    overflow: hidden; }
    .header .menu ul {
      display: block; }
      .header .menu ul li ul {
        position: relative;
        width: 100%;
        left: 5%; }
        .header .menu ul li ul li ul {
          left: 5%; } }

/*# sourceMappingURL=nav.cs.map */
