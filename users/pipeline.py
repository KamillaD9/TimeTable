USER_FIELDS = ['username', 'email']

def create_user_by_social(strategy, details, backend, user=None, *args, **kwargs):
    if user:
        return {'is_new': False}

    fields = dict((name, kwargs.get(name, details.get(name)))
                  for name in backend.setting('USER_FIELDS', USER_FIELDS))
    fields['is_verified'] = True
    fields['mail_send'] = True
    if not fields:
        return

    return {
        'is_new': True,
        'user': strategy.create_user(**fields)
    }

def save_user(backend, user, response, *args, **kwargs):
    if (not user.is_verified):
        user.is_verified = True
        user.mail_send = True
        user.save()
    return
