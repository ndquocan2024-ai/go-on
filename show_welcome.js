function showWelcome(user) {
    const name = user?.name || "Khách";
    const badge = user?.isVip ? "*" : "";
    console.log(`Chào mừng ${name} ${badge}`.trim());
}
