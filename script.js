//modal functinality
document.addEventListener('DOMContentLoaded', () => {
    console.log('dom fully load');

    //select all members and close button
    const teamMembers = document.querySelectorAll('.team-member');
    
    const closeButtons = document.querySelectorAll('.close');
//add click event to each member
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const modalId = member.getAttribute('data-modal');
            console.log('opening modal with id:${modalId');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // closeButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const modalId = button.getAttribute('data-modal');
    //         document.getElementById(modalId).style.display = 'none';
    //     });
    // });
    //add click event to close each
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            console.log('closing modal with id:${modalId');
           modal.style.display = 'none';
        });
    });
//ad click event to window to close modal when click outside
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            console.log('opening modal due to outside click');
            event.target.style.display = 'none';
        }
    });

    //  search functionality
    document.getElementById('searchBar').addEventListener('input', function () {
        let filter = this.value.toUpperCase();
        let teamMembers = document.getElementsByClassName('team-member');

        for (let i = 0; i < teamMembers.length; i++) {
            let name = teamMembers[i].getElementsByTagName("h3")[0];
            if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
                teamMembers[i].style.display = "";
            } else {
                teamMembers[i].style.display = "none";
            }
        }
    });
    Selection.forEach(section => {
        const visibleMembers = section.querySelectorAll('.team-member:not([style*="display: none"])');
        if (visibleMembers.length > 0) {
            section.style.display = "";
        } else {
            section.style.display = "none";
        }
    });
});


function filterMembers() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const sections = document.querySelectorAll('main section');
    let anySectionVisible = false;

    sections.forEach(section => {
        const members = section.querySelectorAll('.team-member');
        let sectionHasMember = false;

        members.forEach(member => {
            const memberName = member.getAttribute('data-name').toLowerCase();
            if (memberName.includes(searchValue)) {
                member.style.display = 'block';
                sectionHasMember = true;
            } else {
                member.style.display = 'none';
            }
        });

        if (sectionHasMember) {
            section.style.display = 'block';
            anySectionVisible = true;
        } else {
            section.style.display = 'none';
        }
    });

    if (!anySectionVisible && searchValue === '') {
        sections.forEach(section => {
            section.style.display = 'block';
            const members = section.querySelectorAll('.team-member');
            members.forEach(member => {
                member.style.display = 'block';
            });
        });
    }
}




