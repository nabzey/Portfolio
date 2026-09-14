import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import TechStrip from '@/components/TechStrip';
import ProjectsPreview from '@/components/ProjectsPreview';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsPreview from '@/components/SkillsPreview';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TechStrip />
      <ProjectsPreview />
      <ExperienceSection />
      <SkillsPreview />
      <AboutSection />
    </Layout>
  );
};

export default Index;
