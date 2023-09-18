export const people = [{
    id: 0,
    name: "Ali Hajizadeh",
    field: "CEO on Admoon",
    comment: "Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 5
  }, {
    id: 1,
    name: "Alireza Aghaei",
    field: "Developer",
    comment: "I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 3
  }, {
    id: 2,
    name: "Ali Hajizadeh",
    field: "CEO on Admoon",
    comment: "Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 4
  }, {
    id: 3,
    name: "Alireza Aghaei",
    field: "Developer",
    comment: "I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 3
  }, {
    id: 4,
    name: "Ali Hajizadeh",
    field: "CEO on Admoon",
    comment: "Together, we'll align your ads with your business objectives, ensuring every penny spent brings profitable returns. No more guesswork; I'll let data-driven decisions and my expert guidance light the way to success.",
    imageId: "C1",
    star: 5
  }];

  export const getImageUrl = (person) => {
    return (
        window.location.origin +'/assets/images/'+ person.imageId + 'Profile2.png'
    );
  }
  