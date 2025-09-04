from rest_framework.permissions import BasePermission, SAFE_METHODS

class HasPermission(BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        if not hasattr(request.user, 'role'):
            return False
        required_perm = f'{view.basename}_crop' if view.basename else 'view_crop'
        return request.user.role.permissions.filter(codename=required_perm).exists()