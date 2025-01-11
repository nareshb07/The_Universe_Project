import React from 'react'
import { BackgroundBeams } from "/src/components/ui/BackgroundBeams";
import ShowMoreText from './ShowMoreText';

function ListofWishes() {
    const sampleText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, obcaecati facilis suscipit saepe blanditiis aut culpa, sequi tenetur voluptas id pariatur voluptate sint eius officiis omnis doloremque mollitia! Dolores, molestiae voluptates expedita cupiditate maxime quos eos excepturi non a, nobis placeat possimus nesciunt, quam mollitia at consectetur aliquid ullam facere ex doloremque? Quibusdam sunt adipisci veniam ut deleniti enim possimus eligendi molestiae nulla atque voluptates mollitia sed nostrum suscipit deserunt aut officia libero at eaque, facilis reiciendis iusto esse error corrupti. Unde, in necessitatibus rerum odit omnis, exercitationem, fugit hic veniam veritatis voluptatem sequi distinctio! Saepe dolorum laborum explicabo, fugit officiis exercitationem ea voluptatum eaque, officia aspernatur possimus. Rerum, neque quasi animi quos magni illum vitae earum? Eum accusantium id consequuntur incidunt sint aspernatur velit dicta ab consequatur odit quaerat, inventore possimus, totam illum temporibus assumenda odio provident culpa libero laboriosam porro, perspiciatis repudiandae earum. Iure accusantium aperiam voluptatem fugit quis, quam quibusdam consequuntur eveniet nulla suscipit at aut sapiente quidem a magnam, inventore possimus ullam dolore exercitationem autem enim corporis reiciendis. Expedita officiis quam, dolorum tenetur, praesentium tempora similique nesciunt possimus inventore natus veniam quos laborum delectus corporis incidunt voluptates ut eveniet nostrum rem magni id. Impedit deleniti, labore molestias a voluptates delectus veniam vel praesentium rerum nisi perspiciatis perferendis at quasi repellat, est ipsum rem quod voluptatem ipsa, fugiat vero ut debitis modi. Dignissimos, voluptatibus placeat. Cumque assumenda esse, repellat, architecto vero quas placeat ratione, unde dignissimos accusantium similique eveniet. Eos mollitia dolorum, reprehenderit nobis commodi repellendus nostrum"

  return (
    <>

<div
    className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        
        <ShowMoreText text={sampleText} limit={50}/>


        <div>
            <BackgroundBeams/>
        </div>
        </div>
    </>
  )
}

export default ListofWishes
