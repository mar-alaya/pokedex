export function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">
          {" "}
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/960px-Pok%C3%A9_Ball_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
            width={30}
          />
          <p>Pokédex</p>
        </a>
      </div>
    </>
  );
}
