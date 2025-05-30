function skillsMember()  {
    return {
        name: "Member",
        description: "A member of the team with specific skills.",
        skills: [
            "JavaScript",
            "Python",
            "HTML/CSS",
            "React",
            "Node.js"
        ],
        availability: function() {
            return "Available for tasks and projects.";
        },
                addSkill: function(skill) {
                    this.skills.push(skill);
                }
            };
        }