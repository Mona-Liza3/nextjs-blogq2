import React from 'react'
import hermoine from "@/app/Public/Hermione Granger - Anatomy.jpeg"
import Image from 'next/image'
import Carhero from './carhero'
import Carblog from './Carblog'
import Cargallery from './Cargallery'

const Car = () => {
  return (
    <>      <section >
<Carhero/>

<Carblog/>
<Cargallery/>

<giscus></giscus>
  {/* enable: false
  repo: # Github repository name
  repo_id: # Github repository id
  category: # Github discussion category
  category_id: # Github discussion category id
  # Available values: pathname | url | title | og:title
  mapping: pathname
  # Available values: 0 | 1
  reactions_enabled: 1
   # Available values: 0 | 1
  emit_metadata: 1
  # Available values: light | light_high_contrast | light_protanopia | light_tritanopia | dark | dark_high_contrast | dark_protanopia | dark_tritanopia | dark_dimmed | preferred_color_scheme | transparent_dark | noborder_light | noborder_dark | noborder_gray | cobalt | purple_dark
  theme: light
  # Available values: en | zh-CN
  lang: en
  # Place the comment box above the comments
  input_position: bottom
  # Load the comments lazily
  loading: lazy */}


  </section></>

  )
}

export default Car