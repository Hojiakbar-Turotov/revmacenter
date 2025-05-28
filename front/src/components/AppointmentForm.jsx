import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const validatePhone = (phone) => {
    const phoneRegex = /^[+\d\s\-()]{7,15}$/;
    return phoneRegex.test(phone);
};

const AppointmentForm = ({
    title = "Записаться на приём",
    services = [
        { value: "", label: "Выберите услугу" },
        { value: "cardiology", label: "Кардиология" },
        { value: "dermatology", label: "Дерматология" },
        { value: "pediatrics", label: "Педиатрия" },

    ],
    onSubmit,
    privacyPolicyText = "Отправляя заявку, вы соглашаетесь на нашу политику конфиденциальности",
}) => {
    const [selectedService, setSelectedService] = useState("");
    const [subService, setSubService] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [agree, setAgree] = useState(false);

    const subServicesMap = {
        cardiology: [
            { value: "", label: "Сначала выберите услугу" },
            { value: "consultation", label: "Консультация" },
            { value: "checkup", label: "Обследование" },
        ],
        dermatology: [
            { value: "", label: "Сначала выберите услугу" },
            { value: "skin_check", label: "Проверка кожи" },
            { value: "treatment", label: "Лечение" },
        ],
        pediatrics: [
            { value: "", label: "Сначала выберите услугу" },
            { value: "vaccination", label: "Вакцинация" },
            { value: "general", label: "Общий осмотр" },
        ],

    };

    const resetForm = () => {
        setSelectedService("");
        setSubService("");
        setName("");
        setPhone("");
        setAgree(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agree) {
            toast.error("Пожалуйста, дайте согласие на политику конфиденциальности.");
            return;
        }
        if (!validatePhone(phone)) {
            toast.error("Пожалуйста, введите правильный номер телефона!");
            return;
        }

        const formData = { selectedService, subService, name, phone, agree };
        if (onSubmit) {
            onSubmit(formData);
        } else {
            console.log("Данные формы:", formData);
        }
        toast.success("Запрос отправлен!");
        resetForm();

    };

    return (
        <section id="form" className="pt-[30px] pb-[30px]">
            <div className="container mx-auto px-[20px]">
                <div className="bg-gradient-to-r from-black to-[#8e0c0c] bg-cover bg-center p-14 rounded-[12px]">
                    <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
                    <form className="grid md:grid-cols-3 gap-5 mt-6" onSubmit={handleSubmit} noValidate>
                        <div className="flex flex-col gap-5">
                            <div className="relative">
                                <select
                                    className="w-full bg-white p-3 pr-10 rounded outline-none appearance-none cursor-pointer"
                                    value={selectedService}
                                    onChange={(e) => {
                                        setSelectedService(e.target.value);
                                        setSubService("");
                                    }}
                                    required
                                >
                                    {services.map(({ value, label }) => (
                                        <option key={value} value={value}>{label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative">
                                <select
                                    className={`w-full bg-white p-3 pr-10 rounded outline-none appearance-none ${!selectedService ? "bg-gray-200 cursor-not-allowed" : ""}`}
                                    value={subService}
                                    onChange={(e) => setSubService(e.target.value)}
                                    disabled={!selectedService}
                                    required
                                >
                                    {(subServicesMap[selectedService] || [{ value: "", label: "Сначала выберите услугу" }]).map(({ value, label }) => (
                                        <option key={value} value={value}>{label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <input
                                type="text"
                                className="w-full bg-white p-3 rounded outline-none"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="tel"
                                className="w-full bg-white p-3 rounded outline-none"
                                placeholder="Ваш телефон"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-5 relative">
                            <button
                                type="submit"
                                className="w-full p-3 rounded relative overflow-hidden group transition-colors duration-1000 text-white bg-red-600"
                            >
                                Оставить заявку
                                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
                            </button>
                            <label className="flex items-start gap-2 text-white text-sm">
                                <input
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    required
                                    className="mt-1"
                                />
                                <span className="mt-[-5px]">{privacyPolicyText}</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </section>
    );
};

export default AppointmentForm;
