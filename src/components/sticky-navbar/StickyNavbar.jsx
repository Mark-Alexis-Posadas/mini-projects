import { useEffect, useState } from "react";

const StickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar-container"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
      <nav className="navbar-container d-flex align-items-center justify-content-between p-3">
        <h1>logo</h1>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>

      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        dolore fugiat velit minus iste. Reiciendis, maiores omnis cupiditate
        minima minus aperiam. Unde voluptates perferendis provident tempore
        praesentium eaque, harum, tenetur incidunt blanditiis adipisci hic, in
        nobis explicabo ut eos sint mollitia minima ea odio autem commodi vel.
        Et esse necessitatibus, natus quidem aperiam iure maxime amet dolor ea
        ipsa minus enim sequi qui consequatur totam voluptate, illum, nulla
        dolores. Soluta reiciendis beatae tenetur voluptatibus facilis, iure
        voluptas! Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. v Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore
        fugiat velit minus iste. Reiciendis, maiores omnis cupiditate minima
        minus aperiam. Unde voluptates perferendis provident tempore praesentium
        eaque, harum, tenetur incidunt blanditiis adipisci hic, in nobis
        explicabo ut eos sint mollitia minima ea odio autem commodi vel. Et esse
        necessitatibus, natus quidem aperiam iure maxime amet dolor ea ipsa
        minus enim sequi qui consequatur totam voluptate, illum, nulla dolores.
        Soluta reiciendis beatae tenetur voluptatibus facilis, iure voluptas!
        Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam. v v v
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        dolore fugiat velit minus iste. Reiciendis, maiores omnis cupiditate
        minima minus aperiam. Unde voluptates perferendis provident tempore
        praesentium eaque, harum, tenetur incidunt blanditiis adipisci hic, in
        nobis explicabo ut eos sint mollitia minima ea odio autem commodi vel.
        Et esse necessitatibus, natus quidem aperiam iure maxime amet dolor ea
        ipsa minus enim sequi qui consequatur totam voluptate, illum, nulla
        dolores. Soluta reiciendis beatae tenetur voluptatibus facilis, iure
        voluptas! Recusandae, odit molestias perspiciatis error quibusdam optio
        praesentium debitis, delectus similique aut nulla quisquam culpa maiores
        reprehenderit aliquam beatae laudantium repudiandae in aperiam.
      </main>
    </>
  );
};

export default StickyNavbar;
