export const fetchAuth = async (mail, pass) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/auth?email=${encodeURIComponent(mail)}&password=${encodeURIComponent(pass)}`, {
        method: 'POST',
        cache : 'no-cache',
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
};

export const fetchRegister = async (user, name, email, password) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/register?user=${encodeURIComponent(user)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
        method: 'POST',
        cache : 'no-cache',
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
};

export const updateUserMeta = async (id, meta) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/${id}/optional`, {
        method: 'PATCH',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "meta": meta }) // updated body
    });
    const data = await response.json();
    return data;
};

export const fetchUserById = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/${id}`, {
        method: 'GET',
        cache: 'no-cache',
    });
    const data = await response.json();
    return data;
};