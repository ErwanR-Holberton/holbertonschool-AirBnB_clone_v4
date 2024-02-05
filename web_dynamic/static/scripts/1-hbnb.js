$(document).ready(function() {
    console.log('DOM is loaded!');
    let selectedAmenities = {};
    $('input[type="checkbox"]').change(function() {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');
        if ($(this).prop('checked')) {
            selectedAmenities[amenityId] = amenityName;
            console.log(selectedAmenities);
        } else {
            delete selectedAmenities[amenityId];
            console.log(selectedAmenities);
        }
        let selectedAmenitiesText = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(selectedAmenitiesText);
    });
});
