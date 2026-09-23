import React, { useState } from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { facultyMembers } from '../../../components/faculty/facultyData';
import { Faculty } from '../../../components/faculty/types';
import { FacultyModal } from '../../../components/faculty/FacultyModal';
import { CheckCircle, FileText, Download, Building2, GraduationCap, Clock, ChevronDown } from 'lucide-react';
import animationLab1 from '../../../assets/animation-lab1.jpg';
import animationLab2 from '../../../assets/animation-lab2.jpg';
import animationLab3 from '../../../assets/animation-lab3.jpg';

const AnimationDepartment = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [openSemester, setOpenSemester] = useState<string | null>(null);

  const hodFaculty = facultyMembers.find((f) => f.name === "S. Chidhambar Reddy");

  const departmentFaculty = facultyMembers.filter(
    (f) => f.department === "Animation" || f.department === "B.Sc Animation & VFX"
  );

  const semesters = [
    {
      title: "Third Semester",
      papers: [
        {
          name: "Introduction to 3D Modelling",
          code: "BSCANIC3-IM-T2",
          cos: [
            "Understand fundamental principles of 3D graphics including geometry, projection, and workspace environment",
            "Apply various 3D modeling techniques using industry-standard software",
            "Use materials and textures with UV mapping and texture painting",
            "Design lighting setups for realism and depth",
            "Develop basic rigging systems for animation",
            "Animate models using keyframes and graph editor",
            "Produce high-quality renders with optimized settings",
            "Integrate assets into post-production workflows",
          ],
        },
        {
          name: "2D Animation",
          code: "BSCANIC3-AN-T3",
          cos: [
            "Apply the 12 principles of animation",
            "Understand Adobe Animate CC interface",
            "Manage workspace and tools effectively",
            "Use timeline and onion skinning techniques",
            "Create shapes and drawings",
            "Use symbols and libraries efficiently",
            "Apply tweening techniques",
            "Integrate and synchronize audio",
          ],
        },
        {
          name: "Digital Compositing",
          code: "BSCANIC3-DC-T1",
          cos: [
            "Understand Adobe After Effects workflow",
            "Import and manage digital assets",
            "Organize layers and compositions",
            "Apply animation techniques",
            "Use expressions and puppet tools",
            "Create effects, masking, and text animations",
            "Work with green screen and particle systems",
            "Render output for different platforms",
          ],
        },
      ],
    },
    {
      title: "Fourth Semester",
      papers: [
        {
          name: "Texturing and Shading 3D Models",
          code: "BSCANIC4-TS-T1",
          cos: [
            "Apply shading models in Maya",
            "Use bitmap and procedural textures",
            "Apply bump, normal, and displacement maps",
            "Create layered shaders",
            "Perform UV mapping",
            "Texture full character models",
            "Manage shader networks",
            "Execute complete texturing workflow",
          ],
        },
        {
          name: "Match Moving and Camera Tracking",
          code: "BSCANIC4-MM-T2",
          cos: [
            "Apply tracking techniques",
            "Use planar tracking",
            "Perform camera tracking",
            "Apply masking techniques",
            "Work with still frame tracking",
            "Refine tracking with manual inputs",
            "Solve 3D camera motion",
            "Troubleshoot tracking issues",
          ],
        },
        {
          name: "Lighting and Rendering",
          code: "BSCANIC4-LR-T3",
          cos: [
            "Understand lighting fundamentals",
            "Use different light types",
            "Apply three-point lighting",
            "Create daylight scenes",
            "Design night lighting setups",
            "Integrate character with background",
            "Use HDRI lighting",
            "Perform color correction for compositing",
          ],
        },
      ],
    },
  ];

  const labImages = [
    { src: animationLab1, alt: "Animation Lab 1" },
    { src: animationLab2, alt: "Animation Lab 2" },
    { src: animationLab3, alt: "Animation Lab 3" },
  ];

  return (
    <AcademicsLayout pageTitle="Department of Animation & VFX" breadcrumbPath="Animation" category="Departments">

      {/* 1. About the Department */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About the Department</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>The Animation & VFX Department serves as a premier creative hub, offering a three-year undergraduate B.Sc Animation & VFX programme designed to transform creative potential into professional expertise within the global entertainment industry. The curriculum follows a balanced approach, combining theoretical knowledge with hands-on training to ensure graduates are industry-ready and proficient in the latest production tools.</p>
            <p>The department provides comprehensive training across multiple creative and technical disciplines. In Graphic Design, students build a strong foundation in visual communication, including brand identity, layout design, and digital illustration. Motion Graphics focuses on kinetic design, typography animation, and visual media production for branding and commercial use.</p>
            <p>In Animation & Modeling, students learn the principles of 2D character design, motion, and expression, along with 3D modeling, lighting, and rigging for films and games. The VFX & Storytelling component emphasizes integrating CGI with live-action footage and developing pre-production skills such as storyboarding.</p>
            <p>The curriculum also includes Design & Interactive Media, where students are trained in game asset creation, motion graphics for digital platforms, and core design principles. In Game Development, students gain specialized knowledge in creating interactive experiences, including environment design, character animation, and working with game engines.</p>
          </div>
        </div>
      </section>

      {/* 2. Program Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Program Outcomes</h2>
          <p className="text-center text-primary font-semibold text-lg mb-2">Course Name: B.Sc Animation & VFX</p>
          <div className="space-y-4 max-w-4xl mx-auto mt-8">
            {semesters.map((semester) => (
              <div key={semester.title} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenSemester(openSemester === semester.title ? null : semester.title)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-card hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-foreground">{semester.title}</h3>
                  <ChevronDown
                    className={`text-primary transition-transform duration-300 ${openSemester === semester.title ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                {openSemester === semester.title && (
                  <div className="px-6 py-6 space-y-8 bg-background">
                    {semester.papers.map((paper) => (
                      <div key={paper.code}>
                        <h4 className="text-lg font-bold text-foreground mb-1">{paper.name}</h4>
                        <p className="text-sm text-muted-foreground mb-4">Course Code: {paper.code}</p>
                        <ul className="space-y-3">
                          {paper.cos.map((co, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="text-primary mt-1 shrink-0" size={18} />
                              <span className="text-muted-foreground text-base">
                                <strong className="text-foreground">CO {idx + 1}:</strong> {co}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Scheme & Syllabus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Scheme & Syllabus</h2>
          <div className="max-w-sm mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-semibold text-foreground mb-4">B.Sc Animation & VFX Syllabus</h3>
              <a href="/BSC-ANIMATION-VFX-ALL-6-Sems-SYL.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Download size={16} /> Download
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. HOD Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">HOD Message</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {hodFaculty && (
              <div className="w-48 shrink-0 mx-auto md:mx-0">
                <img
                  src={hodFaculty.image}
                  alt={hodFaculty.name}
                  className="w-48 h-56 object-cover object-top rounded-xl shadow-md"
                />
                <h3 className="text-center font-bold text-foreground mt-3">{hodFaculty.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{hodFaculty.designation}</p>
              </div>
            )}
            <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed">
              <p>Welcome to the Animation & VFX Department, a premier creative hub dedicated to transforming your artistic potential into professional expertise through our three-year B.Sc Animation & VFX programme.</p>
              <p>As the global demand for high-quality content across film, streaming, and interactive media continues to grow, our curriculum is designed to bridge the gap between creative theory and industry practice, ensuring that you graduate as a highly skilled professional.</p>
              <p>By integrating comprehensive training across disciplines such as 2D and 3D animation, visual effects, storytelling, game development, motion graphics, and graphic design, we provide an ideal platform to master both artistic and technical aspects of modern production.</p>
              <p>We are committed to fostering your growth through a balanced approach of rigorous hands-on training and strong theoretical foundations, empowering you to become a creative professional and future leader in the ever-evolving digital entertainment industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lab Facilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Lab Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Faculty Members */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Faculty Members</h2>
          {departmentFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentFaculty.map((faculty) => (
                <div
                  key={faculty.id}
                  className="group bg-card rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-foreground text-lg leading-tight">{faculty.name}</h3>
                    <p className="text-primary font-medium text-sm">{faculty.designation}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Building2 size={15} className="text-primary shrink-0" />
                      <span>{faculty.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <GraduationCap size={15} className="text-primary shrink-0" />
                      <span>{faculty.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock size={15} className="text-primary shrink-0" />
                      <span>{faculty.experience} Experience</span>
                    </div>
                    <Button
                      onClick={() => setSelectedFaculty(faculty)}
                      variant="outline"
                      className="w-full mt-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Faculty information will be updated soon.</p>
          )}
        </div>
      </section>

      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </AcademicsLayout>
  );
};

export default AnimationDepartment;
