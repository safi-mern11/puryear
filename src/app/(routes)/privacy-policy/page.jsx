import PrivacyAndTerms from "@/app/components/common/PrivacyAndTerms";

function Page() {
  const data = {
    title: "Privacy Policy",
    article: (
      <span>
        Amet risus cursus est aliquam consectetur in suspendisse massa. Est
        sollicitudin cras fermentum habitasse amet phasellus augue id. A
        consequat eu volutpat elementum. Fermentum commodo nibh aliquet nullam.
        Id nunc vitae tellus et pulvinar mattis. Tortor pellentesque massa
        ornare mi neque tristique volutpat urna. Pharetra semper elementum
        sollicitudin hendrerit. Neque pretium enim nunc enim. A integer leo
        ligula sem odio. A tempor amet et aliquam est pharetra aliquet sit
        sagittis. Tellus augue sagittis etiam condimentum auctor nisl turpis.
        Porta ornare pretium id tincidunt commodo. In eu sit sagittis quisque at
        varius lobortis amet. Feugiat tempor euismod mattis vitae augue. Gravida
        purus tellus sit ultricies hac.
        <br />
        <br />
        Fames tempus et in adipiscing sed venenatis habitant quis. Pellentesque
        pharetra fringilla pulvinar lobortis. Semper gravida interdum viverra at
        maecenas quis vitae. Condimentum nibh massa molestie mauris. Purus est
        eu justo vestibulum morbi. Eu tellus volutpat habitasse neque. Dolor
        purus ut sit aenean ultricies cursus cursus viverra sit. Erat volutpat
        scelerisque ultrices malesuada arcu suscipit a. Quam ultricies neque
        pulvinar sit volutpat. Maecenas diam et augue risus. Amet faucibus morbi
        neque a fermentum eget ultricies odio. Mi feugiat tincidunt elementum
        nisi consequat etiam enim non senectus. Ornare id massa sed fermentum.
        <br />
        <br />
        Euismod turpis porttitor nisi lorem id nulla id tempor enim. Facilisis
        id scelerisque bibendum sagittis in sapien amet eleifend. Gravida nulla
        non id facilisis mi augue volutpat dignissim potenti. Eu hac duis sit
        aliquet a. Vitae consectetur gravida tincidunt vestibulum. Urna est
        tellus elit diam vitae justo sed viverra ultrices. Non odio ornare amet
        nunc orci aliquet congue. Ultricies non iaculis et cras. Amet sit sit
        ultrices diam egestas eu sapien. Posuere egestas eu quisque gravida ut
        at aliquam risus cras. Ipsum sagittis dictum ultricies tristique
        vulputate at sem aliquet. Cras augue sociis ut nisl ipsum sit placerat
        sit ipsum. Consectetur sit sagittis aliquet euismod ultrices vehicula.
        Vitae ac vitae et tincidunt ut quam hendrerit. Elementum imperdiet
        blandit tempus non ridiculus quis arcu ornare venenatis.
        <br />
        <br />
        Mattis amet sit tempus at sit dolor. Malesuada augue volutpat ultricies
        enim tellus tellus turpis odio. Mauris eget vestibulum id elementum orci
        mattis feugiat proin donec. Sit erat risus malesuada mauris. Nam risus
        arcu blandit scelerisque id mollis arcu tincidunt. Lorem amet pharetra
        nec a magnis nunc tellus. Aliquet eget congue tortor nunc eu tincidunt
        fusce. Felis quam convallis sodales sed. Et justo nam risus laoreet
        arcu. Metus purus quis sed tincidunt vestibulum.
      </span>
    ),
  };

  return (
    <div className="max-w-[1204px] w-full mx-auto font-proximaNova xl:pt-[95px] lg:pt-[99.16px] md:pt-[56px] pt-[60px] xl:pb-[133px] lg:pb-[103px] md:pb-[98px] pb-[73px] ">
      <PrivacyAndTerms title={data.title} article={data.article} />
    </div>
  );
}

export default Page;
