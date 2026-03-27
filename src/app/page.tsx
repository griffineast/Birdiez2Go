"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquirySource, setInquirySource] = useState("");

  const openModal = (source: string) => {
    setInquirySource(source);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onCtaClick={() => openModal("Nav")} />
      <main>
        <Hero onCtaClick={() => openModal("Hero")} />
        <About />
        <Services onCtaClick={(source: string) => openModal(source)} />
        <Gallery />
        <Locations />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA onClick={() => openModal("Floating Button")} />
      <ContactModal
        isOpen={modalOpen}
        onClose={closeModal}
        source={inquirySource}
      />
    </>
  );
}
