function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] flex bg-cover bg-center items-end"
      style={{
        backgroundImage: `url(https://storage.googleapis.com/storage-ajaib-prd-platform-wp-artifact/2020/03/pendapatan-avengers-endgame.jpg)`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-blue-900/60 p-2">
        Avengers Endgame
      </div>
    </div>
  );
}

export default Banner;
